import { Layout } from "../components/Layout";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { getHash } from "../utils/getHash";
import { resolveRoutes } from "./resolveRoutes";

interface Routes {
    [key: string]: Function;
}

const routes: Routes = {
    '/': Home,
    '/character': Character,
}


export const router = async() => {
    const app = null || document.querySelector('#app');
    if(app){
        let hash = getHash();
        let route = resolveRoutes(hash);
        let currentView = routes[route];
        console.log("route: ", hash)
        let currentPage =  currentView ?? NotFound;
        app.innerHTML = await Layout(currentPage);
    }
}