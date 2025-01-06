import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

export default function BannerGalery({list}) {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
  
    const mainSliderSettings = {
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: nav2,
    };
  
    const thumbnailSliderSettings = {
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      vertical: true,
      asNavFor: nav1,
      infinite: true,
    };

  return (
    <div className="w-full flex justify-end relative">
              <div className="w-full absolute -z-10">
                <Slider {...mainSliderSettings} ref={(slider1) => setNav1(slider1)}>
                  {list.map((movie) => (

                    <img
                      key={movie.id}
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title || movie.name}
                      className="w-full object-contain"
                    />

                  ))}
                </Slider>
              </div>
              <div className="w-1/4 h-full bg-gray-800">
                <Slider {...thumbnailSliderSettings} ref={(slider2) => setNav2(slider2)}>
                  {list.map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || movie.name}
                        className="w-1/2 h-full object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
  )
}
