import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:4000";



function AddItem() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [images, setImages] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestData = { title, description, year, thumbnail, images };
        axios
            .POST(`${API_URL}/projects/${projectId}`, requestData)
            .then((response) => {
                alert("success");
                navigate(`/${projectId}`);
            });
    };




    return (
        <>
            <form className='addItemForm' onSubmit={handleFormSubmit}>
                <h2>Hi user! Add new product</h2>
                <div className='Inputs'>
                    <label>
                        Project Title
                        <input name="projectTitle" type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Description Text
                        <input name="description" type="text" placeholder="YProject Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Year
                        <input name="year" type="text" placeholder="Year of the project" value={year} onChange={(e) => setYear(e.target.value)} />
                    </label>
                    <label>
                        Thumbnail
                        <input name="url" type="url" placeholder="Thumbnail's URL" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </label>
                    <label>
                        Add Image
                        <input name="url" type="url" placeholder="Image URL" value={images} onChange={(e) => setImages(e.target.value)} />
                    </label>

                </div>
                <button type="submit">Add new Project</button>

            </form>
        </>
    )
}

export default AddItem;