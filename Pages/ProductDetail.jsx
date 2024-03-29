import { useNavigate, useParams } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
import { useContext, useEffect, useState } from "react";
import "../Styles/DetailComponentStyles.modules.scss";

import axios from "axios";
import ImagesSliderDetail from "../Components/ImagesSliderDetail";
// const API_URL = "http://localhost:4000";

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
    axios
      .delete(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="ProductDetailWrapper">
      <ImagesSliderDetail className="ImgSlider" />

      {project && <h3>{project.title}</h3>}
      {project && <p>{project.description}</p>}


      <div className="ButtonsWrapper">
        <button onClick={handleDeleteProject}>Delete Project
        </button>
        {/* Links buttons add/update  */}
        <button type="button" onClick={handleAddClick}>
          {addComponent && navigate("/add")}
          Add new Project
        </button>
        <button type="button" onClick={handleEditClick}>
          {editComponent && navigate(`/update/${projectId}`)}
          Edit Project
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
