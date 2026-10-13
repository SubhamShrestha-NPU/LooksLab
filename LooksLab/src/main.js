import { primarySidebar } from "./components/primary-sidebar/export.mjs";

const root = document.getElementById("root");
const sidebar = await primarySidebar();

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "./components/primary-sidebar/styles.css";
document.head.append(stylesheet);

root.innerHTML = sidebar.markup;
sidebar.initialize(root);