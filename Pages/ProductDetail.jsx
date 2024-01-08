import ImagesSliderDetail from '../Components/ImagesSliderDetail';
import '../Styles/DetailComponentStyles.modules.scss'


function ProductDetail (){
    return ( 

    <>
    <ImagesSliderDetail/>
    <h2>Hello there! from productdetail</h2>
    <section>
        <p className="DescriptionText"></p>
    </section>
    
    </>
    )
}

export default ProductDetail;