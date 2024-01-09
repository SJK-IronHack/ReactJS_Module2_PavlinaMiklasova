// import classes from "../Styles/DetailComponentStyles.modules.scss";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:4000";

const EditItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // <== ADD
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  return (
    <>
      <div>
        <h3>Edit the Project</h3>
        <form>
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

          <button type="submit">Update Project</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
