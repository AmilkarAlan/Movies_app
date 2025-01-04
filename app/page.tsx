"use client";
import { useEffect, useState } from 'react';
import { apiFetch } from "./lib/requests";
import Carousel from './ui/carousel/Carousel';


export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      const data = await apiFetch("movie/popular", { language: "es-419", page: 1, region: "MX" });
      setPopularMovies(data.results);
      setLoading(false);
    }
    fetchPopularMovies();
  }, []);


  return (
    <div className="w-full h-screen text-black">
      <section className="w-full h-1/2 flex flex-col relative">
        <div className="w-full h-full bg-slate-200 absolute z-0">
          imagen fondo
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
