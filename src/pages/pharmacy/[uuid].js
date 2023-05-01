import React from "react";
import SideStyles from "../../styles/PharmacyPage.module.css";
import DoctorStyles from "../../styles/DoctorPage.module.css";
import Sidebar from "../../Components/Sidenav3";
import { searchClient } from "../../typesenseAdapter";
import InfoBoxes from "../../Components/InfoBoxes";
import Location from "../../Components/Location";
import { getSession } from "next-auth/react";
import axios from "../../../lib/axios";
import { InstantSearch, SearchBox, Configure } from "react-instantsearch-dom";
import HitsContainer from "../../Components/hitsContainer";

export default function Pharmacy({ data }) {
  return (
    <div className={SideStyles.body}>
      <div className={SideStyles.leftHalf}>
        <Sidebar />
      </div>
      <InstantSearch searchClient={searchClient} indexName="patients_access">
        <div className={SideStyles.rightHalf}>
          <div className={SideStyles.imageContainer}>
            <div className={SideStyles.bottomCenter}>
              <SearchBox className={DoctorStyles.searchDoctor} />
              <Configure hitsPerPage={5} />
            </div>
          </div>
          <div className={SideStyles.infoLocContainer}>
            <div className={SideStyles.drBox}>
              <h3 className={SideStyles.underline}>{"Doctor's Contact"}</h3>
              <InfoBoxes className={SideStyles.drInfo} />
            </div>
            <div className={SideStyles.location} style={{ margin: "1rem" }}>
              <HitsContainer />
            </div>
            <div className={SideStyles.location} style={{ margin: "2rem" }}>
              <Location />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { uuid } = context.params;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  if (session.user.role !== "pharmacy") {
    const role = session.user.role;
    const uuid = session.user.uuid;
    return {
      redirect: {
        destination: `/${role}/${uuid}`,
        permanent: false,
      },
    };
  }

  const data = await axios.get("info/pharmacy", {
    params: {
      pharmacyUUID: uuid,
    },
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  return {
    props: {
      data: data.data.data,
    },
  };
}
