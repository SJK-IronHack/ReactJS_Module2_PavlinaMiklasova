import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllProjectContext } from "../Contexts/AllProjectsContext";

//  import classes from "../Styles/DetailComponentStyles.modules.scss";
// const API_URL = "http://localhost:4000";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  const { setNeedUpdate } = useContext(AllProjectContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestData = { title, description, year, thumbnail, images };
    axios
      .post(`${import.meta.env.VITE_API_URL}/projects`, requestData)
      .then((response) => {
        setNeedUpdate(true);
        alert("You've added the new project");
        navigate("/");
      });
  };

  return (
    <div className="FormWrapper">
      <form className="FormContent" onSubmit={handleFormSubmit} >
        <h2>Hi user! Add new product</h2>
        
          <label  className="FormItem">
            Project Title
            <input
              name="projectTitle"
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label  className="FormItem">
            Description Text
            <input
              name="description"
              type="text"
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label  className="FormItem">
            Year
            <input
              name="year"
              type="text"
              placeholder="Year of the project"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label  className="FormItem">
            Thumbnail
            <input
              name="url"
              type="url"
              placeholder="Thumbnail's URL"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </label>
          <label  className="FormItem">
            Add Image
            <input
              name="url"
              type="url"
              placeholder="Image URL"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </label>
       
        <button type="submit">Add the Project</button>
      </form>
    </div>
  );
};
export default AddItem;
