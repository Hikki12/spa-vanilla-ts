import { CharacterCard } from "../CharacterCard";


const renderList = (array = []) => {
    if (array.length < 1) return '';
    
    let htmlList = ``;
    array.map((character) => {
        htmlList += CharacterCard(character);
    })
    return htmlList;
}


export const CharactersList = (array = []) => {
    const view = `
        <div class="grid md:grid-cols-2 gap-4 place-content-center">
            ${renderList(array)}
        </div>
    `;
    return view;
}