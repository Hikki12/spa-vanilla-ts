export const CharacterCard = (character: Character) => {
    const { name, image } = character;
    const view = `
        <div class="mx-auto flex flex-col items-center justify-center hover:cursor-pointer hover:-translate-y-2 rounded-md w-[100%]">
            <img
                loading="lazy"
                src=${image}
                class="h-64 lg:h-72 w-full rounded-t-md"
            />
            <div class="bg-gray-800 text-white w-full py-2 px-4 rounded-b-md">
                <p>${name}</p>
            </div>
        </div>
    `;
    return view;
}