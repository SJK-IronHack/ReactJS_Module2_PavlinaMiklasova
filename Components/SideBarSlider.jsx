import { useContext } from "react";
import "../Styles/SideBarSlider.modules.scss";
import { Link } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { AllProjectContext } from "../Contexts/AllProjectsContext";

function SideBarSlider() {
  const { projects } = useContext(AllProjectContext);

  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          backgroundColor: "white",
          color: "red",
        }}
      >
        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          height={200}
          align="start"
          orientation="vertical"
          slideGap="xs"
          controlsOffset="xs"
          controlSize={40}
          loop
          dragFree
          withControls={false}
        >
          {projects.map((project) => (
            <>
              <li key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.title} </Link>
              </li>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default SideBarSlider;
