import '../Styles/SideBarSlider.modules.scss'

import { Carousel } from '@mantine/carousel';


function SideBarSlider() {
    return (

        <div style={{ height: 400, display: 'flex'}}>
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
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
        </div>
    );
}

export default SideBarSlider;