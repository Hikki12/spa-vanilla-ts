import "../components/CharactersList"
import { CharactersList } from "../components/CharactersList";
const API = "https://rickandmortyapi.com/api/character";


const getCharacters = async () => {
    const response = await window.fetch(API).then(res => res.json());
    return response
}

export const Home = async () => {

    const response = await getCharacters();
    const { results } = response;

    const view = `
        <div class="min-h-screen  max-w-[1000px] mx-auto">
            ${CharactersList(results)}
        </div>
    `;
    return view;
}