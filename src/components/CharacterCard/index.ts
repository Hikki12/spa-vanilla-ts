export const CharacterCard = (character: Character) => {
    const ledGreen = `<div class="w-4 h-4 bg-green-500 rounded-full"></div>`;
    const ledRed = `<div class="w-4 h-4 bg-red-500 rounded-full"></div>`;
    const ledGray = `<div class="w-4 h-4 bg-gray-500 rounded-full"></div>`;
    const { name, image, status } = character;

    const renderStatus = (status: string) => {
        if(status === 'Alive'){
            return ledGreen;
        }else if(status === 'Dead') {
            return ledRed;
        }else {
            return ledGray;
        }
    }

    const view = `
        <div class="mx-auto flex flex-col items-center justify-center hover:cursor-pointer hover:-translate-y-2 rounded-md w-[100%] min-w-[330px] ease-out duration-500">
            <img
                loading="lazy"
                src=${image}
                class="h-64 lg:h-72 w-full rounded-t-md"
            />
            <div class="bg-stone-500/50 text-white w-full py-4 px-4 rounded-b-md">
                <p class="text-xl mb-2">${name}</p>
                <div class="flex items-center gap-2">${renderStatus(status)} <p>${status}<p></div>
            </div>
        </div>
    `;
    return view;
}