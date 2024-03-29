import "../Styles/DetailComponentStyles.modules.scss";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AllProjectContext } from "../Contexts/AllProjectsContext";
// const API_URL = "http://localhost:4000";

const EditItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { setNeedUpdate } = useContext(AllProjectContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestData = { title, description };
    axios
      .put(`${import.meta.env.VITE_API_URL}/projects/${projectId}`, requestData)
      .then((response) => {
        setNeedUpdate(true);
        alert("You've edited the project");
        navigate(`/`);
      });
  };

  return (
    <>
      <div className="FormWrapper">
        <h3>Edit the Project</h3>
        <form onSubmit={handleFormSubmit} className="FormContent">
          <label className="FormItem" >Project Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label  className="FormItem" >Description:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            </label>

          <button type="submit">Update the Project</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
