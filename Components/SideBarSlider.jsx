import '../Styles/SideBarSlider.modules.scss'

import { Carousel } from '@mantine/carousel';


function SideBarSlider() {

    fetch("https://github.com/sonali582000/Module2-jsonBackendServer/blob/master/db.json")
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
  })
  .catch( (err) => console.log(err));

    return (

        <div style={{ height: '50vh', display: 'flex', backgroundColor:'white',color:"red"}}>
            <Carousel
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                height={200}
                align="start" orientation="vertical"
                slideGap="xs" controlsOffset="xs"
                controlSize={40}
                loop
                dragFree
                withControls={false}
            >
                <Carousel.Slide>    <img 
      src="https://github.com/sonali582000/Module2-jsonBackendServer/blob/master/img/SliderSideBar/P0.jpg"
      alt="new"
      /></Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
        </div>
    );
}

export default SideBarSlider;