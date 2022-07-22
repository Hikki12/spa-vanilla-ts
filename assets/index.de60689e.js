const a=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};a();const d=()=>`
        <footer class="h-16 w-full flex items-center justify-center text-white text-base">
            &copy; All rights reserved
        </footer>
    `,u=()=>`
        <header class="h-16 w-full flex items-center justify-center bg-white text-stone-600">
            <p class="font-bold text-3xl">100tifiko</p>
        </header>
    `,f=async e=>`
    ${u()}
        ${await e()}
    ${d()}
    `,v=()=>`
    
        <div>Nothing to found</div>
    `,h=e=>{const n='<div class="w-4 h-4 bg-green-500 rounded-full"></div>',s='<div class="w-4 h-4 bg-red-500 rounded-full"></div>',o='<div class="w-4 h-4 bg-gray-500 rounded-full"></div>',{name:t,image:r,status:i}=e;return`
        <div class="mx-auto flex flex-col items-center justify-center hover:cursor-pointer hover:-translate-y-2 rounded-md w-[100%] min-w-[330px] ease-out duration-500">
            <img
                loading="lazy"
                src=${r}
                class="h-64 lg:h-72 w-full rounded-t-md"
            />
            <div class="bg-stone-500/50 text-white w-full py-4 px-4 rounded-b-md">
                <p class="text-xl mb-2">${t}</p>
                <div class="flex items-center gap-2">${(c=>c==="Alive"?n:c==="Dead"?s:o)(i)} <p>${i}<p></div>
            </div>
        </div>
    `},p=(e=[])=>{if(e.length<1)return"";let n="";return e.map(s=>{n+=h(s)}),n},w=(e=[])=>`
        <div class="grid md:grid-cols-2 gap-5 place-content-center">
            ${p(e)}
        </div>
    `,g="https://rickandmortyapi.com/api/character",m=async()=>await window.fetch(g).then(n=>n.json()),y=async()=>{const e=await m(),{results:n}=e;return console.log("response: ",e),`
        <div class="h-64 py-6 lg:py-12 w-full bg-white flex justify-center items-center text-stone-600">
            <p class="text-4xl font-bold"> Rick And Morty API </p>
        </div>
        <div class="min-h-screen max-w-[900px] mx-auto py-16 lg:py-32">
            ${w(n)}
        </div>
    `},x=()=>`
    
        <div>Nothing to found</div>
    `,b=()=>window.location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",L=e=>e.length<=3?e==="/"?e:"/:id":`/${e}`,$={"/":y,"/character":v},l=async()=>{const e=document.querySelector("#app");if(e){let n=b(),s=L(n),o=$[s];console.log("route: ",n);let t=o!=null?o:x;e.innerHTML=await f(t)}};window.addEventListener("load",l);window.addEventListener("hashChange",l);
