import { Footer } from "../Footer"
import { Header } from "../Header"

export const Layout = async(children: Function) => {

    const view = `
    ${Header()}
        ${await children()}
    ${Footer()}
    `
    return view;
}