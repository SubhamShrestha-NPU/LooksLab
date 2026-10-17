export const SIDEBAR_TOGGLE_EVENT = "layout:sidebar-toggle";

export function requestSidebarToggle(root, isOpen) {
    root.dispatchEvent(
        new CustomEvent(SIDEBAR_TOGGLE_EVENT, {
            detail: { isOpen },
        }),
    );
}
