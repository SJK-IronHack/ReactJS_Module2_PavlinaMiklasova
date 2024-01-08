import ImagesSliderDetail from '../Components/ImagesSliderDetail';
import '../Styles/DetailComponentStyles.modules.scss'


function ProductDetail (){
    return ( 

    <>
    <ImagesSliderDetail/>
    <h2>Here comes the project.title</h2>
    <section>
        <p className="DescriptionText">Here comes project.description</p>
        <p className="Yeartext">Here comes project.year</p>
    </section>
    
    </>
    )
}

export default ProductDetail;