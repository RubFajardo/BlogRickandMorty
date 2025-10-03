import { create } from "zustand";


interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface CharacterStore {
    characters: Character[];
    setCharacters: (posts: Character[]) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
    characters: [],
    setCharacters: (characters) => set({ characters }),
}));
