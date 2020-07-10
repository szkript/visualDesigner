import Point from './point_model.js';
import { TOOL_LINE, TOOL_BRUSH, TOOL_CIRCLE, TOOL_ERASER, TOOL_PAINT_BUCKET, TOOL_PENCIL, TOOL_RECTANGLE, TOOL_TRIANGLE } from './tool.js';
import { getMouseCoordsOnCanvas } from './utility.js';

export default class Paint {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = canvas.getContext("2d");
    }

    set activeTool(tool) {
        this.tool = tool;
    }

    init() {
        this.canvas.onmousedown = e => this.onMouseDown(e);
    }

    onMouseDown(e) {
        this.savedData = this.context.getImageData(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        this.canvas.onmousemove = e => this.onMouseMove(e);
        document.onmouseup = e => this.onMouseUp(e);

        this.startPos = getMouseCoordsOnCanvas(e, this.canvas);
        console.log(this.startPos);
    }

    onMouseMove(e) {
        this.currentPos = getMouseCoordsOnCanvas(e, this.canvas);

        switch (this.tool) {
            case TOOL_LINE:
                this.drawShape();
                break;
            default:
                break;
        }
    }

    onMouseUp(e) {
        this.canvas.onmousemove = null;
        document.onmouseup = null;
    }

    drawShape() {
        this.context.putImageData(this.savedData, 0, 0);

        this.context.beginPath();
        this.context.moveTo(this.startPos.x, this.startPos.y);
        this.context.lineTo(this.currentPos.x, this.currentPos.y);
        this.context.stroke();
    }

}