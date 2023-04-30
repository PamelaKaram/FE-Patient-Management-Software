import React, { useState } from "react";
import { getSession } from "next-auth/react";
import axios from "../../../../../lib/axios";
import fileIcon from "../../../../icons/new-file-svgrepo-com.svg";
import videoIcon from "../../../../icons/video-svgrepo-com.svg";
import imageIcon from "../../../../icons/image-svgrepo-com.svg";

import Styles from "../../../../styles/ViewPatientMedicalRecordsTests.module.css";

const ViewPatientMedicalRecordsTests = ({ patientData, files }) => {
  const [error, setError] = useState(null);
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "svg", "bmp"];
  const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "3gp", "mkv"];

  const openFile = async (file) => {
    console.log("Clicked");
    const res = await axios.get(`/upload/download/${file.filename}`);
    window.open(res, "_blank");
  };

  console.log(patientData, files);

  return (
    <div className={Styles.container}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ margin: "1rem" }}>Medical Test & Records</h1>
        <div style={{ margin: "2rem" }}>
          {files.map((file, index) => {
            const isImage = imageExtensions.some((ext) =>
              file.filename.toLowerCase().endsWith(ext)
            );
            const isVideo = videoExtensions.some((ext) =>
              file.filename.toLowerCase().endsWith(ext)
            );
            const source = isImage ? imageIcon : isVideo ? videoIcon : fileIcon;
            return (
              <div key={index} className={Styles.fileRow}>
                <img
                  src={source.src}
                  width={25}
                  height={25}
                  alt="File icon"
                  className={Styles.fileIcon}
                />
                <button
                  className={Styles.fileButton}
                  onClick={() => openFile(file)}
                >
                  {file.filename}
                </button>
                <span className={Styles.fileSize}>
                  Updated on: {file.updatedAt.split("T")[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewPatientMedicalRecordsTests;

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (session.user.role !== "doctor") {
    const role = session.user.role;
    const uuid = session.user.uuid;
    return {
      redirect: {
        destination: `/${role}/${uuid}`,
        permanent: false,
      },
    };
  }

  const data = await axios.get("info/patient", {
    params: {
      patientUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  const pres = await axios.get("upload/list", {
    params: {
      patientUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  return {
    props: {
      patientData: data.data.data,
      files: pres.data,
    },
  };
}
