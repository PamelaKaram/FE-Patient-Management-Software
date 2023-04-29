import SidenavMobile from "../Components/SideNavResponsive";
import SidenavWeb from "../Components/Sidenav2";
import { useState, useEffect } from "react";
import BlogArticle from "../Components/BlogsAndArticles";
import back from '../icons/drImagee.png';
import homeStyles from '../styles/Home.module.css';
import ChatButton from '../Components/RequestAptPop';
import home from '../styles/EmailReq.module.css';
import Tips from "../Components/Tips";
import Image from "next/image";
import Card from '../Components/Card.js';
import buttonStyles from '../styles/HomeCards.module.css';
import Contact from "../Components/Contact";

export default function Home() {
  // render the SidnavMobile component if the screen width is less than 768px
  // render the SidenavWeb component if the screen width is greater than 768px
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const articles = [
    {
      imageUrl: "/icons/ArticleImage1.jpg",
      releaseDate: "Friday, December 12, 2022",
      title: "Heart Disease in Pregnancy",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S152169341500070X?via%3Dihub",
    },
    {
      imageUrl: "/icons/ArticleImage2.jpg",
      releaseDate: "Friday, December 12, 2022",
      title: "The Relationship between Physical and Mental Health",
      link: "https://www.sciencedirect.com/science/article/pii/S0277953617306639?via%3Dihub",
    },
    {
      imageUrl: "/icons/ArticleImage3.jpg",
      releaseDate: "Friday, December 12, 2022",
      title: "Blogs",
      link: "https://medium.com/@NewYorkCardiovascularAssociate",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <main>
      {width < 768 ? <SidenavMobile /> : <SidenavWeb />}
      <header className={buttonStyles.headerContainer}>
      <div className={buttonStyles.blueRectangle}>
        <h1 className={buttonStyles.title}>
          Trust your health to the best specialists 
          Dr. Abou Karam
          </h1>
       
     
      </div>
      <div className={buttonStyles.cardsContainer}>

        <Card title="Stay up to date with the latest articles on health." buttonColor="primary" buttonText="Blogs & Articles" />
        <Card title="Good Health Good Wealth." buttonColor="secondary" buttonText="Tips" />
        <Card title="Are you looking for a cardiologist?" buttonColor="tertiary" buttonText="About" />
      </div>
    </header>
      <div className={homeStyles.aboutContainer}>
            <Image
                src={back.src} alt="About section image" width="400" height="400"
                className={home.pic} />
            <div className={homeStyles.about}>
                <h2>About Me</h2>
                <p>My mission is to promote heart health and prevent heart disease in my patients.
                    I offer a range of preventive measures such as lifestyle modifications, medication
                    management, and regular monitoring to help my patients maintain optimal heart health.
                    Book a consultation, get diagnosed and find the best treatment.</p>
                <ChatButton onClick={() => alert('Request an appointment')}
                />
            </div>
        </div>
      <div>
        <BlogArticle articles={articles} />
        <Tips />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
