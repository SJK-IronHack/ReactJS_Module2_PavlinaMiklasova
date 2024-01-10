import "../Styles/DetailComponentStyles.modules.scss";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// const API_URL = "http://localhost:4000";

const EditItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

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
      .put(`${API_URL}/projects/${projectId}`, requestData)
      .then((response) => {
        alert("success");
        navigate(`/${projectId}`);
      });
  };

  return (
    <>
      <div className="FormWrapper">
        <h3>Edit the Project</h3>
        <form onSubmit={handleFormSubmit}>
          <label>Project Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Update the Project</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
