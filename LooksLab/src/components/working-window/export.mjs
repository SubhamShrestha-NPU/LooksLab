import { initializeWorkingWindow } from "./script.mjs";

const markupResponse = await fetch("./components/working-window/index.html");

if (!markupResponse.ok) {
    throw new Error(`Unable to load working window markup: ${markupResponse.status}`);
}

const markup = await markupResponse.text();

export function workingWindow() {
    return {
        markup,
        stylesheet: "./components/working-window/styles.css",
        initialize: initializeWorkingWindow,
    };
}