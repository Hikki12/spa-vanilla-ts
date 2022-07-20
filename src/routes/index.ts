import { Layout } from "../components/Layout";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { getHash } from "../utils/getHash";
import { resolveRoutes } from "./resolveRoutes";


const routes = {
    '/': Home,
    '/character': Character,
}


export const router = async() => {
    const app = null || document.querySelector('#app');
    if(app){
        let hash = getHash();
        let route = resolveRoutes(hash);
        let currentPage = await routes[route] ? routes[route] : NotFound
        app.innerHTML = await Layout(currentPage);
    }
}