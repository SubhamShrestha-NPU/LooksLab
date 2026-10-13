export function initializePrimarySidebar(root) {
    const sidebar = root.querySelector("#primarySidebar");

    if (!sidebar) {
        throw new Error("Primary sidebar markup is missing #primarySidebar.");
    }

    let resizing = false;
    let startX = 0;
    let startWidth = 0;

    sidebar.addEventListener("pointerdown", (event) => {
        const bounds = sidebar.getBoundingClientRect();

        // Only begin resizing when the pointer is inside the dedicated right-edge handle.
        if (event.clientX < bounds.right - 8) {
            return;
        }

        resizing = true;
        startX = event.clientX;
        startWidth = bounds.width;
        // Keep receiving pointer events while dragging, even if the pointer leaves the handle.
        sidebar.setPointerCapture(event.pointerId);
        sidebar.classList.add("is-resizing");
        event.preventDefault();
    });

    sidebar.addEventListener("pointermove", (event) => {
        if (!resizing) {
            return;
        }

        const minimumWidth = window.innerWidth * 0.05;
        const maximumWidth = window.innerWidth * 0.4;
        // Clamp the dragged width so it stays within the sidebar's configured limits.
        const width = Math.min(
            maximumWidth,
            Math.max(minimumWidth, startWidth + event.clientX - startX),
        );

        sidebar.style.width = `${width}px`;
        sidebar.style.flexBasis = `${width}px`;
    });

    const stopResizing = (event) => {
        if (!resizing) {
            return;
        }

        resizing = false;
        sidebar.releasePointerCapture(event.pointerId);
        // Remove the temporary resize state after the pointer is released or cancelled.
        sidebar.classList.remove("is-resizing");
    };

    sidebar.addEventListener("pointerup", stopResizing);
    sidebar.addEventListener("pointercancel", stopResizing);
}
