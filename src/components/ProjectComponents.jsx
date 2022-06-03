import React from "react";
import Projects from "./Projects.jsx";
import "./ProjectComponents.css";
// import Mamaearth from "./Projects-pic/Mamaearth.png";
import BathBody from "./Projects-pic/BathBody.png";
import Orbitz from "./Projects-pic/Orbitz.png";

export default function ProjectComponents() {
// const project1 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]
const project2 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]
const project3 = ["fab fa-html5","fab fa-css3-alt","fab fa-js","fab fa-react"]

  return (
    <div className="all-projects" id="recent-work">
      <p>Projects</p>
      {/* <Projects
      preview={Mamaearth}
        title="Mamaearth clone"
        description="In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.Some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage."
        arr={project1}
        github="https://github.com/Arfeen98/MamaEarthclone"
        website="https://calm-sawine-27b8ed.netlify.app/"
      /> */}
      <Projects
      preview={BathBody}
        title="Bath&Body Works clone"
        description="In this project we have tried to make a look alike clone of Bath&Body Works website some of the functionality we have added are home page, payment page, slider, navbar, sorting, drop down,search by name inside the product pages, coupon functionality"
        arr={project2}
        github="https://github.com/Arfeen98/Bathanbodyworks-clone"
        website=" https://arfeen98.github.io/Bathanbodyworks-clone"
      />
      <Projects
      preview={Orbitz}
      title="Orbitz Clone"
      description="In this project we have tried to make a look alike clone of Orbitz website with the tech stack React,Redux,CSS. We have try to made all the pages with the functionality of slider, sorting, drop down, user-authentication, we have created the data using local storage"
      arr={project3}
      github="https://github.com/KalashThakur/Orbitz/tree/main/CW%20PROJECT/orbitz-clone-master"
      website="https://enchanting-creponne-8be7a1.netlify.app/"

      />
    </div>
  );
}
