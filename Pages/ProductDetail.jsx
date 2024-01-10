import { useNavigate, useParams } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
import { useContext, useEffect, useState } from "react";
// import "../Styles/DetailComponentStyles.modules.scss";
import axios from "axios";
const API_URL = "http://localhost:4000";

function ProductDetail() {
  const { projectId } = useParams();
  const { getOneProduct } = useContext(AllProjectContext);
  const [project, setProject] = useState({});
  const [addComponent, setaddComponent] = useState(false);
  const [editComponent, seteditComponent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProject(getOneProduct(projectId));
  }, [projectId]);

  const handleAddClick = () => {
    setaddComponent(!addComponent);
  };

  const handleEditClick = () => {
    seteditComponent(!editComponent);
  };

  const handleDeleteProject = () => {
    axios.delete(`${API_URL}/projects/${projectId}`).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <p>{projectId}</p>
      {project && <p>{project.description}</p>}
      {project && <p>{project.title}</p>}
      {project && <p>{project.thumbnail}</p>}

      <button onClick={handleDeleteProject}>Delete Project</button>
      <br></br>
      {/* Links buttons add/update  */}
      <button type="button" onClick={handleAddClick}>
        {addComponent && navigate("/add")}
        Add new Project
      </button>
      <button type="button" onClick={handleEditClick}>
        {editComponent && navigate(`/update/${projectId}`)}
        Edit Project
      </button>
    </>
  );
}

export default ProductDetail;
