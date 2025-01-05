"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "./lib/requests";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "./ui/carousel/Carousel";


export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      const data = await apiFetch("movie/popular", {
        language: "es-419",
        page: 1,
        region: "MX",
      });
      setPopularMovies(data.results);
      setLoading(false);
    }
    fetchPopularMovies();
  }, []);

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
    <div className="w-full h-screen text-black">
      <section className="w-full h-1/2 flex flex-col relative">
        <div className="w-full h-full">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div className="w-full flex">
              <div className="w-3/4">
              <Slider {...mainSliderSettings} ref={(slider1) => setNav1(slider1)}>
                {popularMovies.map((movie) => (

                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                    className="h-1/4 object-cover"
                  />

                ))}
              </Slider>
              </div>
              <div className="w-1/4 pl-4">
                <Slider {...thumbnailSliderSettings} ref={(slider2) => setNav2(slider2)}>
                  {popularMovies.map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || movie.name}
                        className="w-full h-24 object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

          )}
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center z-10">
          <h2>Toda la información de tus peliculas favoritas</h2>
          <p>En un solo lugar.</p>
        </div>
      </section>
      <section className="w-full h-1/2 text-white">
        <div>
          <div>Filtro: hoy, semana</div>
          <h1>Peliculas populares</h1>
          <div>
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <Carousel list={popularMovies} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
