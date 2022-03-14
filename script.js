const gridContainer = document.querySelector('.gridContainer');

for(let i=1;i<=16;i++){
    const gridRow = document.createElement('div');
    gridRow.classList.add(`gridRow-${i}`,'row');
    gridContainer.appendChild(gridRow);
}
const rowNodeList = document.querySelectorAll('.row');

function appendToRow(a){
    for(let i=1;i<=16;i++){
        const gridSpace = document.createElement('div');
        gridSpace.classList.add(`gridSpace-${i}`,'space',`row-${a + 1}`);
        rowNodeList[a].appendChild(gridSpace);
    }
}
for(let i=1;i<=16;i++){
    appendToRow(i-1);
}

const spaceNodeList = document.querySelectorAll('.space');

spaceNodeList.forEach((node) => {
    node.addEventListener('mouseover', () => {
        node.style.backgroundColor = 'black'});
});
