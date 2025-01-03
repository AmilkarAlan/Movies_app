"use client";
import { useEffect, useState } from 'react'
import { searchEngine } from "@/app/lib/requests";
export default function Seeker() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
        searchEngine(search).then((res) => { setResults(res.results) });
    }, [search]);
    return (
        <div className="w-1/3 h-full flex items-center relative">
            <div className="w-full h-full flex items-center justify-center">
                <input type="text" name="search" className="text-black rounded-s-md" onChange={handleChange} />
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
