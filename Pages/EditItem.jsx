// import classes from "../Styles/DetailComponentStyles.modules.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
