import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "../Components/Sidenav1";
// import AppointmentsList from '../Components/AppointmentList';
import LoginForm from "../Components/LoginForm";
import SidenavMobile from "../Components/SideNavResponsive";
import SidenavWeb from "../Components/Sidenav2";
import { useState, useEffect } from "react";
import Buttons from '../Components/HomePageButtons';
import BlogArticle from '../Components/BlogsAndArticles';
import Contact from '../Components/Contact';
import About from '../Components/About';
import Tips from '../Components/Tips';

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
      imageUrl: '/icons/ArticleImage1.jpg',
      releaseDate: 'Friday, December 12, 2022',
      title: 'Heart Disease in Pregnancy',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S152169341500070X?via%3Dihub',
    },
    {
      imageUrl: '/icons/ArticleImage2.jpg',
      releaseDate: 'Friday, December 12, 2022',
      title: 'The Relationship between Physical and Mental Health',
      link: 'https://www.sciencedirect.com/science/article/pii/S0277953617306639?via%3Dihub',
    },
    {
      imageUrl: '/icons/ArticleImage3.jpg',
      releaseDate: 'Friday, December 12, 2022',
      title: 'Blogs',
      link: 'https://medium.com/@NewYorkCardiovascularAssociate',
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
  <main>
    
    {width < 768 ? <SidenavMobile /> : <SidenavWeb />}
    
    <div> 
      <Buttons />
    </div>
    <div> 
      <About />
    </div>
    <div>
      <BlogArticle articles={articles} />
      <Tips />
      <Contact />
    </div>
  </main>
  )
  
}

