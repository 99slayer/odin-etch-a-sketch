let color = 'black';

const clearCanvas = document.querySelector('.clearCanvas');
const canvasSize = document.querySelector('.canvasSize');
const gridContainer = document.querySelector('.gridContainer');

canvasSize.addEventListener('click',()=>{
    gridSize = prompt('Grid size?');
    gridConstruction(gridSize);
});

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
}
gridConstruction(16);

const spaceNodeList = document.querySelectorAll('.space');

spaceNodeList.forEach((space) => {
    space.addEventListener('mouseover', () => {
        space.style.backgroundColor = `${color}`});
});

clearCanvas.addEventListener('click',()=>{
    spaceNodeList.forEach((space) =>{
        space.style.backgroundColor = 'white';
    })
})
