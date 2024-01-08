import classes from '../Styles/DetailComponentStyles.modules.scss'

function AddItem() {
    return (
        <>
            <form className='addItemForm'>
                <h2>Hi user! Add new product</h2>
                <div className='Inputs'>
                    <label>
                        Project Title
                        <input name="projectTitle" type="text" placeholder="Project Title" value={projectTitle} onChange={handleProjectTitleChange} />
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