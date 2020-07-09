document.addEventListener('DOMContentLoaded', (event) => {
    // init toolbar
    const toolbarIconList = getToolbarIcons();
    Object.keys(toolbarIconList).map(key => loadLeftToolbar(key, toolbarIconList[key]));
    initCollection();
});

function initCollection(){
    initLinesWidths();
    initBrushWidths();
    loadRightToolbar();
    setDefaultActiveItems();
};

function setDefaultActiveItems() {
    const defaultTool = "pencil";
    const defaultColor = "#000000";
    const defaultPixelSize = "1";

    document.querySelectorAll('[data-tools]').forEach(
        tool => {
            if (tool.getAttribute('data-tools') === defaultTool) {
                tool.setAttribute("class", "item active");
            }
        }
    );

    document.querySelectorAll('[data-color]').forEach(
        color => {
            if (color.getAttribute('data-color') === defaultColor) {
                color.setAttribute("class", "item active");
            }
        }
    );

    document.querySelectorAll('[data-line-width]').forEach(
        pixelSize => {
            if (pixelSize.getAttribute('data-line-width') === defaultPixelSize) {
                pixelSize.setAttribute("class", "item active");
            }
        }
    );
};

function loadRightToolbar() {
    const toolbar = document.getElementById('swatches');
    const colors = getColors();
    colors.forEach(color => toolbar.appendChild(createColor(color)));
};

function createColor(color) {
    const colorDiv = document.createElement('div');
    colorDiv.setAttribute('class', 'item');
    colorDiv.setAttribute('data-color', `${color}`);
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'swatch');
    innerDiv.setAttribute('style', `background-color:${color};`);
    colorDiv.appendChild(innerDiv);
    return colorDiv;
};

function loadLeftToolbar(group, toolbarIcons) {
    // parse group commands div
    const toolbar = document.getElementById(group);
    // little workaround for one active item from separate groups
    if (group !== "commands") {
        group = "tools";
    };
    toolbarIcons.forEach(icon => {
        toolbar.appendChild(createToolbarBlock(group, icon))
    });
};

function initLinesWidths() {
    // parse group lineWidths div
    const lineWidthToolbar = document.getElementById('linewidths');
    // create 5 different pixelSize chooser
    const maxPixelSize = 5;
    for (let pixelSize = 1; pixelSize <= maxPixelSize; pixelSize++) {
        lineWidthToolbar.appendChild(createToolWidth("line", pixelSize));
    };
};

function initBrushWidths() {
    // parse group lineWidths div
    const brushWidthToolbar = document.getElementById('brushwidths');
    // create 5 different pixelSize chooser
    const maxPixelSize = 9;
    for (let pixelSize = 4; pixelSize <= maxPixelSize; pixelSize++) {
        brushWidthToolbar.appendChild(createToolWidth("brush", pixelSize));
    };
};


function createToolWidth(toolType, pixelSize) {
    const pixelChooserDiv = document.createElement('div');
    pixelChooserDiv.setAttribute('class', 'item');
    pixelChooserDiv.setAttribute(`data-${toolType}-width`, pixelSize);
    pixelChooserDiv.setAttribute('title', `${pixelSize} Pixel`);
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', `${toolType}width`);
    innerDiv.setAttribute('style', `width:${pixelSize}px;height:${pixelSize}px`);
    pixelChooserDiv.appendChild(innerDiv);
    return pixelChooserDiv;
};

function createToolbarBlock(group, toolElement) {
    const toolDiv = document.createElement('div');
    toolDiv.setAttribute('class', 'item');
    toolDiv.setAttribute(`data-${group}`, toolElement);
    toolDiv.setAttribute('title', `${toolElement} tool`);
    const toolImg = document.createElement('img');
    toolImg.setAttribute('src', `src/tool_images/${toolElement}_icon.png`);
    toolImg.setAttribute('alt', '');
    toolDiv.appendChild(toolImg);
    return toolDiv;
};

function getToolbarIcons() {
    const toolbarDict = {
        commands: ['undo', 'redo', 'download'],
        shapes: ['line', 'rectangle', 'circle', 'triangle'],
        tools: ['pencil', 'brush', 'paint-bucket', 'eraser', 'text']
    };

    return toolbarDict;
};

function getColors() {
    return [
        '#ffffff',
        '#000000',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#00ffff'
    ]
}