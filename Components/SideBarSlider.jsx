import { useContext, useEffect, useState } from "react";
import "../Styles/SideBarSlider.modules.scss";
import { Link } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { AllProjectContext } from "../Contexts/AllProjectsContext";

function SideBarSlider() {
  const { projects } = useContext(AllProjectContext);

  return (
    <>
      <div className="SideBarWrapper">
        <ul>
        {projects.map((project) => (
          <li key={project.id} className="SideBarItem">
            <Link to={`/${project.id}`}>
            <img src={project.thumbnail} className="ImgThumnail"/>
             <p>{project.title} </p> 
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default SideBarSlider;
