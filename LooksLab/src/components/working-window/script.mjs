export function initializeWorkingWindow(root) {
    const workingWindow = root.querySelector("#working-window");

    if (!workingWindow) {
        throw new Error("Working window markup is missing #working-window");
    }
}