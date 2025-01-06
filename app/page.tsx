"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "./lib/requests";
import Carousel from "./ui/carousel/Carousel";
import BannerGalery from "./ui/bannerGalery/BannerGalery";


export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies(endpoint) {
      const data = await apiFetch(endpoint, {
        language: "es-419",
        page: 1,
        region: "MX",
      });
      return data
    }
    fetchMovies("movie/popular").then((res) => setPopularMovies(res.results)).finally(() => setLoading(false));
    fetchMovies("movie/now_playing").then((res) => setNowPlayingMovies(res.results)).finally(() => setLoading(false));
  }, []);



  return (
    <div className="w-full h-full text-black">
      <section className="w-full h-full flex flex-col relative overflow-hidden">
        <div className="w-full h-full">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <BannerGalery list={nowPlayingMovies} />
          )}
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
