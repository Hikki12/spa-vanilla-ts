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
    console.log("response: ", response);

    const view = `
        <div class="h-64 py-6 lg:py-12 w-full bg-white flex justify-center items-center text-stone-600">
            <p class="text-4xl font-bold"> Rick And Morty API </p>
        </div>
        <div class="min-h-screen max-w-[900px] mx-auto py-16 lg:py-32">
            ${CharactersList(results)}
        </div>
    `;
    return view;
}