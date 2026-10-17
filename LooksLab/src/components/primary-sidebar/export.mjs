import { initializePrimarySidebar } from "./script.mjs";

const markupResponse = await fetch("./components/primary-sidebar/index.html");

if (!markupResponse.ok) {
    throw new Error(`Unable to load primary sidebar markup: ${markupResponse.status}`);
}

const markup = await markupResponse.text();

export function primarySidebar() {
    return {
        markup,
        stylesheet: "./components/primary-sidebar/styles.css",
        initialize: initializePrimarySidebar,
    };
}