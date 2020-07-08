document.addEventListener('DOMContentLoaded', (event) => {
    // init toolbar
    const toolbarIconList = getToolbarIcons();
    Object.keys(toolbarIconList).map(key => loadTools(key, toolbarIconList[key]));
    initLinesWidths();
});


function loadTools(group, toolbarIcons) {
    // parse group commands div
    const toolbar = document.getElementById(group);

    toolbarIcons.forEach(icon => {
        toolbar.appendChild(createToolbarBlock(icon))
    });
};

function initLinesWidths() {
    // parse group lineWidths div
    const lineWidthToolbar = document.getElementById('linewidths');
    // create 5 different pixelSize chooser
    const pixelSizes = 5;
    for (let pixelSize = 1; pixelSize <= pixelSizes; pixelSize++) {
        lineWidthToolbar.appendChild(createLineWidth(pixelSize));
    };
};

function createLineWidth(pixelSize) {
    const pixelChooserDiv = document.createElement('div');
    pixelChooserDiv.setAttribute('class', 'item');
    pixelChooserDiv.setAttribute('data-line-width', pixelSize);
    pixelChooserDiv.setAttribute('title', `${pixelSize} Pixel`);
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'linewidth');
    innerDiv.setAttribute('style', `width:${pixelSize}px;height:${pixelSize}px`);
    pixelChooserDiv.appendChild(innerDiv);
    return pixelChooserDiv;
};

function createToolbarBlock(toolElement) {
    const toolDiv = document.createElement('div');
    toolDiv.setAttribute('class', 'item');
    toolDiv.setAttribute('data-tool', toolElement);
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