import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";



export default function Carousel({ list }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <Slider {...settings}>
            {list.map((item) => (
                <Card item={item} />
            ))}
        </Slider>
    )
}
