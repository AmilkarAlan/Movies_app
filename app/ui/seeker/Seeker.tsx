"use client";
import { useEffect, useState } from 'react'
import { apiFetch} from "@/app/lib/requests";
export default function Seeker() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        apiFetch("search/multi", {query:search,language:'es-419'}).then((res) => { setResults(res.results) });
        
        
    }, [search]);
    return (
        <div className="w-1/3 h-full flex items-center relative">
            <div className="w-full h-full flex items-center justify-center">
                <input type="text" name="search" className="text-black rounded-s-md" onChange={(e)=> setSearch( e.target.value)} />
                <button className="bg-white text-black rounded-e-md" >Buscar</button>
            </div>
            <div className="w-full h-40 absolute bg-gray-700 top-12 hidden">

                {results.map((result) => {
                    return (
                        <div className="w-full h-12 flex items-center justify-center">
                            <p>{result.title || result.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
