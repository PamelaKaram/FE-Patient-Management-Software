import React from 'react';
import SideStyles from "../styles/PharmacyPage.module.css"
import Sidebar from '../Components/Sidenav3';
import Searchbar from '../Components/FinalSearchBar2';
import InfoBoxes from '../Components/InfoBoxes';
import Location from '../Components/Location'

export default function Pharmacy() {
    return (
        <div className={SideStyles.body}>
            <div className={SideStyles.leftHalf}>
                <Sidebar/>
            </div>
            <div className={SideStyles.rightHalf}>
                <div className={SideStyles.imageContainer}>
                    <div className={SideStyles.bottomCenter}>
                        <Searchbar />
                    </div>
                </div>
                <div className={SideStyles.infoLocContainer}>
                    <div className={SideStyles.drBox}>
                        <h3 className={SideStyles.underline}>Doctor's Contact</h3>
                        <InfoBoxes className={SideStyles.drInfo}/>
                    </div>
                    <div className={SideStyles.location}>
                        <Location />
                    </div>
                </div>
            </div>
        </div>
    );
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    if (session.user.role !== "phaarmacy") {
      const role = session.user.role;
      return {
        redirect: {
          destination: `/${role}`,
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        session,
      },
    };
  }
  
