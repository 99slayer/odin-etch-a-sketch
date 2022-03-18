const defaultColor = 'rgb(0,0,0)';
let mode;
let color;
let spaceNodeList;
let mouseDown = false;
window.onmousedown=()=>{mouseDown=true};
window.onmouseup=()=>{mouseDown=false};

const clearCanvas = document.querySelector('.clearCanvas');
const canvasSize = document.querySelector('.canvasSize');
const defaultModeBtn = document.querySelector('.defaultMode');
const shadingModeBtn = document.querySelector('.shadingMode');
const gridContainer = document.querySelector('.gridContainer');

defaultModeBtn.addEventListener('click',()=>{
    mode = 'default';
    console.log(mode);
});
shadingModeBtn.addEventListener('click',()=>{
    mode = 'shading';
    console.log(mode);
});

// ----------------TURN INTO FUNCTIONS?--------------------
canvasSize.addEventListener('click',()=>{
    gridSize = prompt('Grid size?');
    if(gridSize>100){
        alert('please choose a grid size of 100 or less.')
        return;
    };
    gridConstruction(gridSize);
});
clearCanvas.addEventListener('click',()=>{
    spaceNodeList.forEach((space) =>{
        space.style.backgroundColor = 'white';
    });
});
// -------------------------------------------------------

function clearChildren(x){
    while(x.firstChild){
        x.removeChild(x.firstChild);
    }
}

function gridConstruction(x){
    clearChildren(gridContainer);
    for(let i=1;i<=x;i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add(`gridRow-${i}`,'row');
        gridContainer.appendChild(gridRow);
    }
    const rowNodeList = document.querySelectorAll('.row');
    
    function appendToRow(a){
        for(let i=1;i<=x;i++){
            const gridSpace = document.createElement('div');
            gridSpace.classList.add(`gridSpace-${i}`,'space',`row-${a + 1}`);
            rowNodeList[a].appendChild(gridSpace);
        }
    }
    for(let i=1;i<=x;i++){
        appendToRow(i-1);
    }
    spaceNodeList = document.querySelectorAll('.space');

    spaceNodeList.forEach((space)=>{
        space.style.backgroundColor = 'rgb(255,255,255)'
        space.addEventListener('mousedown',draw);
        space.addEventListener('mouseover',draw);
    });
}

function draw(e){
    // can i reverse this?
    let x = e;
    if(x.type==='mouseover'&&!mouseDown){return}
    else if(mode=='shading'){
        shadingMode(x);
    }
    else{
        defaultMode(x);
    };
};

function shadingMode(i){
    let value = i.target.style.backgroundColor;
    value = value.replace('rgb(','')
    value = parseInt(value);
    if(value>0){
        i.target.style.backgroundColor = `rgb(${value - 25.5},${value - 25.5},${value - 25.5})`;
    }
}
function defaultMode(i){
    i.target.style.backgroundColor = `${defaultColor}`;
};

gridConstruction(16);

// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// make buttons run functions instead of using event listeners? probably less code 'x'