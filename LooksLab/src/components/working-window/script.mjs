import {
    requestSidebarToggle,
    SIDEBAR_TOGGLE_EVENT,
} from "../../layout/sidebar-state.mjs";

export function initializeWorkingWindow(root) {
    const workingWindow = root.querySelector("#working-window");
    const menuButton = workingWindow?.querySelector("#menu");

    if (!workingWindow) {
        throw new Error("Working window markup is missing #working-window");
    }

    if (!menuButton) {
        throw new Error("Working window markup is missing #menu.");
    }

    menuButton.tabIndex = -1;
    menuButton.setAttribute("aria-hidden", "true");

    menuButton.addEventListener("click", () => {
        requestSidebarToggle(root, true);
    });

    root.addEventListener(SIDEBAR_TOGGLE_EVENT, (event) => {
        const isOpen = event.detail.isOpen;

        workingWindow.classList.toggle("is-sidebar-collapsed", !isOpen);
        menuButton.tabIndex = isOpen ? -1 : 0;
        menuButton.setAttribute("aria-hidden", String(isOpen));
    });
}