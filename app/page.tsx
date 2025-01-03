

export default function Home() {
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
          <h1>
            Tendencias
          </h1>
          <div>
            Card de peliculas
          </div>
        </div>
      </section>
    </div>
  );
}
