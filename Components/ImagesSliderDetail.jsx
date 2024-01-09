

function ImagesSliderDetail() {
    const { projectId } = useParams()
    const [project, setProject] = useState();
    useEffect(() => {
        setProject(projects(projectId))
    }, [projectId])


    return (

        <>
        <section className='imageSlider'>
{project.images.map((image)=> {
    <>
    <img key={project.id} src={`${images}`}/>
    </>
})
}    </section>
        </>
    )
}

export default ImagesSliderDetail


