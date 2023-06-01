const container = document.querySelector('#container');
const gridSize = 17.4;
const colors = ['purple','green','orange','pink','purple','blue','red','yellow','violet','gold'];
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', function(){
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            gridSquare.style.backgroundColor = randomColor;
        });
        gridSquare.addEventListener('mouseout',function(){
            gridSquare.style.backgroundColor = "";
        });
    }

