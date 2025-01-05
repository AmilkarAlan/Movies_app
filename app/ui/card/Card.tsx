import Image from "next/image"


export default function Card({ item }) {
    return (
        <div key={item.id} className="relative w-52 h-72 flex flex-col justify-end overflow-hidden group">
            <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={200} height={300} alt={item.name || item.title} 
            className="absolute -z-10 w-full h-full group-hover:blur-sm transition-blur duration-300"/>
            <div className="w-full h-1/2 bg-gray-800 p-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3>{item.title || item.name}</h3>
            </div>
        </div>
    )
}
