import React, { useState, useRef, useEffect } from "react";
import { getSession } from "next-auth/react";
import axios from "../../../../../lib/axios";
import useAxiosAuth from "../../../../../lib/hooks/useAxiosAuth";
import fileIcon from "../../../../icons/new-file-svgrepo-com.svg";
import videoIcon from "../../../../icons/video-svgrepo-com.svg";
import imageIcon from "../../../../icons/image-svgrepo-com.svg";

import Styles from "../../../../styles/ViewPatientMedicalRecordsTests.module.css";

const ViewPatientMedicalRecordsTests = ({ patientData, initialFiles }) => {
  const [error, setError] = useState(null);

  const imageExtensions = ["jpg", "jpeg", "png", "gif", "svg", "bmp"];
  const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "3gp", "mkv"];

  const [message, setMessage] = useState("");
  const [files, setFiles] = useState(initialFiles);
  const [uploaded, setUploaded] = useState(false);

  const openFile = async (file) => {
    console.log("Clicked");
    const response = await axios.get(`/upload/download/${file.filename}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("recfile", file);
    formData.append("patientUUID", patientData.uuid);

    try {
      await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Uploaded");
      setUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const axiosAuth = useAxiosAuth();
  useEffect(() => {
    const getFiles = async () => {
      const pres = await axiosAuth.get("upload/list", {
        params: {
          patientUUID: patientData.uuid,
        },
      });
      setFiles(pres.data);
    };
    getFiles();
  }, [axiosAuth, patientData.uuid, uploaded]);

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
          {files?.map((file, index) => {
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
        <div>
          <button style={styles.button} onClick={handleButtonClick}>
            Select file
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={styles.input}
            onChange={handleFileInputChange}
            accept=".jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.wmv"
          />
          <div style={{ margin: "1rem" }}>{message ? "Uploaded" : null}</div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  input: {
    display: "none",
  },
};

export default ViewPatientMedicalRecordsTests;

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const session = await getSession(context);

  if (!session && !session.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  if (new Date(session.expires) < new Date()) {
    const res = await axios.post("/auth/token", {
      refreshToken: session?.user.refreshToken,
    });
    session.user.accessToken = res.data.accessToken;
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
