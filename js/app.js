import Tool from './tool.class.js';

function initEventListeners() {
    // parse command icons
    document.querySelectorAll('[data-commands]').forEach(
        item => {
            item.addEventListener('click', e => {
                console.log(item.getAttribute("data-commands"));
            });
        });
    // could be a foreach but idc
    activeSelector("[data-tools]");
    activeSelector("[data-line-width]");
    activeSelector("[data-color]");
    console.log("event listeners initialized");
};

function activeSelector(dataGroup) {
    document.querySelectorAll(dataGroup).forEach(
        item => {
            item.addEventListener("click", e => {
                document.querySelector(`${dataGroup}.active`).classList.toggle("active");
                item.classList.toggle("active");

                let selectedTool = item.getAttribute('data-tool');

            });
        });
    
};

document.addEventListener('DOMContentLoaded', (event) => {
    initEventListeners();
});