import React from 'react';
import './Banner.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Banner(props) {
    const { list_banner } = props;
    return (
        <div className="Banner">
            <Carousel interval={2000} showArrows={true} showThumbs={false} autoPlay emulateTouch swipeable={true} infiniteLoop={true}>
                {list_banner.map(e => (
                    <div key={e.id}>
                        <img src={e.img} />
                        <p className="legend">{e.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;  