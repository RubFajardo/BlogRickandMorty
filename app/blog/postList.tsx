"use client";

import { useEffect } from "react";
import {useCharacterStore} from "../blog/postStore";
import Link from "next/link";
import Image from 'next/image'

export default function CharactersList() {
    const { characters, setCharacters } = useCharacterStore();

    useEffect(() => {
        async function fetchCharacters() {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setCharacters(data.results);
        }
        fetchCharacters();
    }, []);

    return (
        <main className="min-h-screen bg-black text-green-400 font-mono p-6">
            {/* Título principal */}
            <h1 className="text-xl font-bold text-center mb-10 tracking-widest drop-shadow-[0_0_15px_#00ff00]">
                Characters
            </h1>

            {/* Contenedor de cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {characters.map((character) => (
                    <div
                        key={character.id}
                        className="bg-gray-900 border-2 border-green-500 shadow-[0_0_15px_#00ff00] rounded-xl overflow-hidden w-64 flex flex-col transition-transform hover:scale-105 hover:shadow-[0_0_25px_#00ff00]"
                    >
                        <Image
                            src={character.image}
                            width={500}
                            height={500}
                            alt={character.name}
                            className="h-64 w-full object-cover opacity-90"
                        />

                        <div className="p-4 flex flex-col gap-4 flex-1">
                            <h5 className="text-xl font-bold tracking-wide text-green-300 drop-shadow-lg">
                                {character.name}
                            </h5>

                            <div className="flex justify-between mt-auto">
                                <Link
                                    href={`/blog/${character.id}`}
                                    className="bg-green-700 hover:bg-green-600 text-black font-bold px-3 py-1 rounded-lg text-sm transition shadow-[0_0_8px_#00ff00]"
                                >
                                    Learn More!
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
