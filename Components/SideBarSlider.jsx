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
        {console.log(projects)}
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/${project.id}`}>{project.title} </Link>
          </li>
        ))}
      </div>
    </>
  );
}

export default SideBarSlider;
