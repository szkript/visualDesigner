document.addEventListener('DOMContentLoaded', (event) => {
    // init toolbar
    const toolbarIconList = getToolbarIcons();
    loadTools(toolbarIconList);
});


function loadTools(toolbarIcons) {
    // parse group commands div
    const commandToolbar = document.getElementById('gc');
    toolbarIcons.forEach(icon => {
        commandToolbar.appendChild(createToolbarBlock(icon))
    });
    // parse group lineWidths div
    const lineWidthToolbar = document.getElementById('lw');
    // create 5 different pixelSize chooser
    const pixelSizes = 5;
    for(let pixelSize = 1; pixelSize <= pixelSizes; pixelSize++){
        lineWidthToolbar.appendChild(createLineWidth(pixelSize));
    }
};

function createLineWidth(pixelSize){
    const pixelChooserDiv = document.createElement('div');
    pixelChooserDiv.setAttribute('class', 'item');
    pixelChooserDiv.setAttribute('data-line-width', pixelSize);
    pixelChooserDiv.setAttribute('title', `${pixelSize} Pixel`);
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'linewidth');
    innerDiv.setAttribute('style', `width:${pixelSize};height:${pixelSize}`);
    pixelChooserDiv.appendChild(innerDiv);
    return pixelChooserDiv;    
};

function createToolbarBlock(toolElement){
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
    return [
        'brush',
        'color_picker',
        'eraser',
        'fill_color',
        'move',
        'new_file',
        'open_file',
        'open_folder',
        'oval',
        'pencil',
        'rectangle',
        'redo',
        'undo',
        'round',
        'text'
    ]
};