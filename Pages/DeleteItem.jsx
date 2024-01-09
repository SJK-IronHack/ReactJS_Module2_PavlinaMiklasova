import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:4000";

function DeleteButton({ projectId, title, description, year, thumbnail, images }) {
  const navigate = useNavigate();

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

  return <button type="submit" onClick={handleDelete}>Delete the Project</button>;
}

export default DeleteButton;
