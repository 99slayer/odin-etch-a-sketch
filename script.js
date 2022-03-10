let gridContainer = document.querySelector('.gridContainer');

for(let i=1;i<=16;i++){
    const gridRow = document.createElement('div');
    gridRow.classList.add(`gridRow-${i}`,'row');
    gridContainer.appendChild(gridRow);
}
// for(let i=1;i<=256;i++){
//     const gridSpace = document.createElement('div');
//     gridSpace.classList.add(`gridSpace-${i}`,'space');
// }