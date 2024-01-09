

function ImagesSliderDetail() {
    const { projectId } = useParams()
    const [project, setProjectImage] = useState();
    useEffect(() => {
        setProjectImage(projects(projectId))
    }, [projectId])


    return (

        <>
        <section className='imageSlider'>
{project.images.map((image)=> {
    <>
    <img key={project.id} src={`${project.images}`}/>
    </>
})
}    </section>
        </>
    )
}

export default ImagesSliderDetail


