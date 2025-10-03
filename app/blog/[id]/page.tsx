"use client"

import {useCharacterStore} from "@/app/blog/postStore";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ params }: { params: { id: string } }) {

    const { characters, setCharacters } = useCharacterStore();
    const character = characters.find(c => c.id === parseInt(params.id));

    if (!character) {
        return ("Personaje no encontrado")
    }

    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-6 font-mono">
            <div className="bg-gray-900 border-2 border-green-500 shadow-[0_0_15px_#00ff00] rounded-2xl overflow-hidden w-full max-w-3xl">
                {/* Imagen */}
                <div className="relative">
                    <Image
                        src={character.image}
                        width={800}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                        <h1 className="text-4xl font-bold text-green-400 drop-shadow-lg tracking-widest items-center justify-center">
                            {character.name}
                        </h1>
                    </div>
                </div>

                {/* Info */}
                <div className="p-6 text-green-300">
                    <p className="text-lg mb-4 italic">
                        {character.species} — {character.gender}
                    </p>

                    {/* Grid con propiedades */}
                    <div className="grid grid-cols-2 gap-6">
                        <p className="bg-black border border-green-500 p-3 rounded-lg shadow-[0_0_10px_#00ff00]">
                            <span className="font-bold text-green-400">Status:</span>{" "}
                            {character.status}
                        </p>
                        <p className="bg-black border border-green-500 p-3 rounded-lg shadow-[0_0_10px_#00ff00]">
                            <span className="font-bold text-green-400">Type:</span>{" "}
                            {character.type || "Unknown"}
                        </p>
                        <p className="bg-black border border-green-500 p-3 rounded-lg shadow-[0_0_10px_#00ff00]">
                            <span className="font-bold text-green-400">Origin:</span>{" "}
                            {character.origin?.name}
                        </p>
                        <p className="bg-black border border-green-500 p-3 rounded-lg shadow-[0_0_10px_#00ff00]">
                            <span className="font-bold text-green-400">Location:</span>{" "}
                            {character.location?.name}
                        </p>
                    </div>

                    {/* Episodios */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-green-400 mb-3">
                            Episodes
                        </h2>
                        <ul className="space-y-2">
                            {character.episode.map((ep, index) => (
                                <li
                                    key={index}
                                    className="bg-black border border-green-500 p-2 rounded-lg shadow-[0_0_6px_#00ff00] hover:bg-green-900/30 transition"
                                >
                                    {ep}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <Link
                    href={`/blog/`}
                    className="bg-green-700 p-8 text-2xl hover:bg-green-600 text-black font-bold rounded-lg transition shadow-[0_0_8px_#00ff00]"
                >
                    Go back!
                </Link>
            </div>
        </main>
    );
}