import { useParams } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
import { useContext, useEffect, useState } from "react";
// import "../Styles/DetailComponentStyles.modules.scss";
import DeleteItem from './DeleteItem'

function ProductDetail() {
  const { projectId } = useParams();
  const { getOneProduct } = useContext(AllProjectContext);
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(getOneProduct(projectId));
  }, [projectId]);

  return (
    <>
      <p>{projectId}</p>
      {project && <p>{project.description}</p>}
      {project && <p>{project.title}</p>}
      < DeleteItem/>
    </>
  );
}

export default ProductDetail;
