import ChatActivityCSS from "../styles/ChatActivity.module.css";
import React, { useEffect, useState } from "react";
import doneIcon from "../icons/doneIcon.svg";
import cancelIcon from "../icons/cancelIcon.svg";
import Image from "next/image";
import WelcomeStyles from "../styles/Welcome.module.css";
import { Avatar } from "@mui/material";
import AnswerQuestion from "./AnswerQuestion";
import axios from "../../lib/axios.js";
import { getSession, useSession } from "next-auth/react";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";

const ChatActivity = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const getQuestions = async () => {
      if (session.user) {
        console.log(session);
        const data = await axios.get("/questions/patientQuestions", {
          headers: {
            Authorization: `Bearer ${session.user?.accessToken}`,
          },
        });
        setQuestions(data.data.questions);
      }
    };
    getQuestions();
  }, [session]);

  const list = questions.map((question) => {
    return (
      <div key={question.id} className={ChatActivityCSS.appointmentpreview}>
        <div className={ChatActivityCSS.info}>
          <div className={ChatActivityCSS.previewtime}>{question.question}</div>
          <div className={ChatActivityCSS.decisions}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              Answer
            </button>
            <AnswerQuestion
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              question={question}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className={WelcomeStyles.main}>
        <h1>{"Looks like you've got some questions to answer"}</h1>
      </div>

      <div className={ChatActivity.appointmentscontainer}>{list}</div>
    </div>
  );
};

export default ChatActivity;
