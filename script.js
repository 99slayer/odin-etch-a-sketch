const defaultColor = 'rgb(0,0,0)';
let mode;
let color;
let spaceNodeList;
let mouseDown = false;
window.onmousedown=()=>{mouseDown=true};
window.onmouseup=()=>{mouseDown=false};

const defaultModeBtn = document.querySelector('.defaultMode');
const darkenBtn = document.querySelector('.darken');
const lightenBtn = document.querySelector('.lighten');
const randomModeBtn = document.querySelector('.randomMode');
const gridContainer = document.querySelector('.gridContainer');

defaultModeBtn.addEventListener('click',()=>{
    mode = 'default';
    console.log(mode);
});
darkenBtn.addEventListener('click',()=>{
    mode = 'darken';
    console.log(mode);
});
lightenBtn.addEventListener('click',()=>{
    mode = 'lighten';
    console.log(mode);
});
randomModeBtn.addEventListener('click',()=>{
    mode = 'random';
    console.log(mode);
});
// functions? ^^
function changeCanvasSize(){
    canvasSize = prompt('Please choose a canvas size.');
    if(canvasSize>100){
        alert('please choose a canvas size of 100 or less.')
        return;
    };
    gridConstruction(canvasSize);
};
function clearCanvas(){
    spaceNodeList.forEach((space) =>{
        space.style.backgroundColor = 'white';
    });
};
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
        space.style.backgroundColor = 'rgb(255,255,255)';
        space.addEventListener('mousedown',draw);
        space.addEventListener('mouseover',draw);
        space.addEventListener('click',(e)=>{
            console.log(e.target.style.backgroundColor);
        });
    });
}
function draw(e){
    // can i reverse this?
    let x = e;
    if(x.type==='mouseover'&&!mouseDown){return}
    else if(mode=='darken'){
        darken(x);
    }
    else if(mode=='lighten'){
        lighten(x);
    }
    else if(mode=='random'){
        randomMode(x);
    }
    else{
        defaultMode(x);
    };
};
function defaultMode(i){
    i.target.style.backgroundColor = `${defaultColor}`;
};
function darken(i){
    let current = i.target.style.backgroundColor;
    current = current.replace(/[rgb()]/g,'');
    let rgb = current.split(',');
    i.target.style.backgroundColor = `rgb(${rgb[0]-25.5},${rgb[1]-25.5},${rgb[2]-25.5})`;
};
function lighten(i){
    let current = i.target.style.backgroundColor;
    current = current.replace(/[rgb()]/g,'');
    let rgb = current.split(',');
    console.log(rgb);
    i.target.style.backgroundColor = `rgb(${rgb[0]+25.5},${rgb[1]+25.5},${rgb[2]+25.5})`;
};
function randomMode(i){
    let r,g,b;
    r = Math.floor((Math.random()*255)+1);
    g = Math.floor((Math.random()*255)+1);
    b = Math.floor((Math.random()*255)+1);
    if(r==0){++r};
    if(g==0){++g};
    if(b==0){++b};
    i.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(r,g,b);
};
gridConstruction(16);