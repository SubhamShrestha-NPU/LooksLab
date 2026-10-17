import { primarySidebar } from "./components/primary-sidebar/export.mjs";
import { workingWindow } from "./components/working-window/export.mjs";
import { SIDEBAR_TOGGLE_EVENT } from "./layout/sidebar-state.mjs";

const root = document.getElementById("root");
const components = await Promise.all([
    primarySidebar(),
    workingWindow(),
]);

for (const { stylesheet: href } of components) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = href;
    document.head.append(stylesheet);
}

root.innerHTML = components
    .map(({ markup }) => markup)
    .join("");

root.addEventListener(SIDEBAR_TOGGLE_EVENT, (event) => {
    root.classList.toggle("is-sidebar-collapsed", !event.detail.isOpen);
});

for (const { initialize } of components) {
    initialize(root);
}