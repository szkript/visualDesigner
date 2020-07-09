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
    activeSelector("[data-brush-width]");
    activeSelector("[data-color]");
    console.log("event listeners initialized");
};

function activeSelector(dataGroup) {
    document.querySelectorAll(dataGroup).forEach(
        item => {
            item.addEventListener("click", e => {
                document.querySelector(`${dataGroup}.active`).classList.toggle("active");
                item.classList.toggle("active");

                if (dataGroup == "[data-tools]") {
                    let selectedTool = item.getAttribute('data-tools');

                    switch (selectedTool) {
                        case Tool.TOOL_LINE:
                        case Tool.TOOL_RECTANGLE:
                        case Tool.TOOL_CIRCLE:
                        case Tool.TOOL_TRIANGLE:
                        case Tool.TOOL_PENCIL:
                            // activate shape linewidths group
                            document.querySelector(".group.for-shapes").style.display = "block";
                            // invisible brush linewidth group
                            document.querySelector(".group.for-brush").style.display = "none";
                            break;
                        case Tool.TOOL_BRUSH:
                            // activate brush linewidths group
                            document.querySelector(".group.for-shapes").style.display = "none";
                            // invisible shape linewidth group
                            document.querySelector(".group.for-brush").style.display = "block";
                            break;
                        default:
                            // make invisible both linewidth group
                            document.querySelector(".group.for-brush").style.display = "none";
                            document.querySelector(".group.for-shapes").style.display = "none";
                    }
                }
            });
        });
};

document.addEventListener('DOMContentLoaded', (event) => {
    initEventListeners();
});