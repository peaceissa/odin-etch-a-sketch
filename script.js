const container = document.querySelector('#container');
let gridSize = 16;
const colors = ['purple','green','orange','pink','purple','blue','red','yellow','violet','gold','almond','maroon','peach'];
   
function createGrid() {
    // container.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare); 

        gridSquare.addEventListener('mouseover', function(){
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            gridSquare.style.backgroundColor = randomColor;
        });
        // gridSquare.addEventListener('mouseout',function(){
        //     gridSquare.style.backgroundColor = "";
        // });

        // container.appendChild(gridSquare); 

    }
}
function clearSketch(){
    location.reload();
}
function createNewGrid() {
        
        const newGridSize = prompt('Enter the number of squares per side (maximum 100):');

            // Validate the input
            if (newGridSize && !isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100) {
                gridSize = parseInt(newGridSize);
                createGrid();
            } else {
                alert('Invalid input! Please enter a number between 1 and 100.');
            }
        }
        
createGrid();

const btn = document.getElementById("grid");
btn.addEventListener('click',createNewGrid);

const clr = document.getElementById('clr');
clr.addEventListener('click',clearSketch);