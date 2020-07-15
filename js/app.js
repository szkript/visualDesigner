import Paint from './paint.class.js';
import { TOOL_LINE, TOOL_BRUSH, TOOL_CIRCLE, TOOL_ERASER, TOOL_PAINT_BUCKET, TOOL_PENCIL, TOOL_RECTANGLE, TOOL_TRIANGLE } from './tool.js';

let paint = new Paint('canvas');
paint.activeTool = TOOL_LINE;
paint.lineWidth = 1;
paint.defaultBrushSize = 4;
paint.selectedColor = "#000000";
paint.init();

function initEventListeners() {
    // parse command icons
    document.querySelectorAll('[data-commands]').forEach(
        item => {
            item.addEventListener('click', e => {
                let command = item.getAttribute("data-commands");

                if(command === 'undo'){
                    paint.undoPaint();
                }
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
                    paint.activeTool = selectedTool;

                    switch (selectedTool) {
                        case TOOL_LINE:
                        case TOOL_RECTANGLE:
                        case TOOL_CIRCLE:
                        case TOOL_TRIANGLE:
                        case TOOL_PENCIL:
                            // activate shape linewidths group
                            document.querySelector(".group.for-shapes").style.display = "block";
                            // invisible brush linewidth group
                            document.querySelector(".group.for-brush").style.display = "none";
                            break;
                        case TOOL_BRUSH:
                        case TOOL_ERASER:
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
                }else if(dataGroup == "[data-line-width]"){
                    let linewidth = item.getAttribute("data-line-width");
                    paint.lineWidth = linewidth;
                }else if(dataGroup == "[data-brush-width]"){
                    let brushSize = item.getAttribute("data-brush-width");
                    paint.brushSize = brushSize;
                }else if(dataGroup == "[data-color]"){
                    let color = item.getAttribute("data-color");
                    paint.selectedColor = color;
                }
            });
        });
};

document.addEventListener('DOMContentLoaded', (event) => {
    initEventListeners();
});