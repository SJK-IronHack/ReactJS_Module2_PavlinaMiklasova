import { useParams, Link } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
import { useContext, useEffect, useState } from "react";
// import "../Styles/DetailComponentStyles.modules.scss";
import DeleteItem from './DeleteItem'
import AddItem from "./AddItem";
import EditItem from "./EditItem";


function ProductDetail() {
  const { projectId } = useParams();
  const { getOneProduct } = useContext(AllProjectContext);
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(getOneProduct(projectId));
  }, [projectId]);

  const handleDelete = (e) => {
    e.preventDefault();
    const requestData = { title, description, year, thumbnail, images };

    axios
      .delete(`${API_URL}/projects/${projectId}`, { data: requestData })
      .then((response) => {
        alert("Success");
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  return (
    <>
    
      <p>{projectId}</p>
      {project && <p>{project.description}</p>}
      {project && <p>{project.title}</p>}
      <button type="submit" onClick={handleDelete}>Delete the Project</button>

      <AddItem/>
      <EditItem/> 

       {/* Links buttons add/update  */}
      <Link to={`/add`}>
        <button type="button"> Add new Project</button>
      </Link>

      <Link to={`/update/:projectId`}>
        <button type="button"> Edit the Project</button>
      </Link>
    </>
  );
}

export default ProductDetail;
