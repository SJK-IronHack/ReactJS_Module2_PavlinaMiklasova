// import classes from "../Styles/DetailComponentStyles.modules.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditItem = ({ match }) => {
  const projectId = match;
  const [project, setProject] = useState({});
  const [updatedData, setUpdatedData] = useState({
    // Initialize with the existing project data
    title: "",
    description: "",
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch the existing project data based on the project ID
    axios
      .get(`http://localhost:4000/projects/${projectId}`)
      .then((response) => {
        console.log(response.data);
        setProject(response.data);
      })
      .catch((error) => console.error("Error fetching project:", error));
  }, [projectId]);

  const handleInputChange = (e) => {
    // Update the corresponding field in the updatedData state
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = () => {
    // Make a PUT request to update the project
    axios
      .put(`http://localhost:4000/projects/${projectId}`, updatedData)
      .then((response) => {
        console.log("Project updated successfully:", response.data);
        // You can handle the updated data as needed (e.g., show a success message, redirect, etc.)
      })
      .catch((error) => console.error("Error updating project:", error));
  };
  return (
    <div>
      <h2>Edit Project</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={updatedData.name}
        onChange={handleInputChange}
      />
      <br />
      <label>Description:</label>
      <textarea
        name="description"
        value={updatedData.description}
        onChange={handleInputChange}
      />
      <br />
      {/* Add other input fields for additional project details as needed */}
      <button onClick={handleUpdate}>Update Project</button>
    </div>
  );
};
export default EditItem;
