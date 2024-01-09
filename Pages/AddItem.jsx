import { useState } from 'react';
import classes from '../Styles/DetailComponentStyles.modules.scss'

function AddItem() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [image, setImage] = useState("");




    return (
        <>
            <form className='addItemForm' onSubmit={handleFormSubmit}>
                <h2>Hi user! Add new product</h2>
                <div className='Inputs'>
                    <label>
                        Project Title
                        <input name="projectTitle" type="text" placeholder="Project Title" value={projectTitle} onChange={handleProjectTitleChange} />
                    </label>
                    <label>
                        Description Text
                        <input name="description" type="text" placeholder="YProject Description" value={fullName} onChange={handleYearChange} />
                    </label>
                    <label>
                        Year
                        <input name="year" type="text" placeholder="Year of the project" value={fullName} onChange={handleYearChange} />
                    </label>
                    <label>
                        Thumbnail
                        <input name="url" type="url" placeholder="Thumbnail's URL" value={imgUrl} onChange={handleUrlChange} />
                    </label>
                    <label>
                        Add Image
                        <input name="url" type="url" placeholder="Image URL" value={imgUrl} onChange={handleImgUrlChange} />
                    </label>

                </div>
            </form>
        </>
    )
}

export default AddItem;