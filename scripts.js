let clickEl = document.getElementById('click-el');
let backColor = document.querySelector('.color');
let arrayOfColors = ['red', 'yellow', 'blue', 'green'];
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
let clickHex = document.querySelector('#click-hex');


clickEl.addEventListener('click', function() {
    const randNum = getRandomColor();
    backColor.textContent = arrayOfColors[randNum];
    document.body.style.backgroundColor = arrayOfColors[randNum];
})


function getRandomColor() {
    return Math.floor(Math.random() * arrayOfColors.length);
}

clickHex.addEventListener('click', function() {
    let hex = '#';

    for(let i = 0; i < 6; i++){
        hex += hexValues[getRandomHexColor()];
      }
    
      backColor.textContent = hex;
      document.body.style.backgroundColor = hex;
    })

    function getRandomHexColor() {
        return Math.floor(Math.random() * hexValues.length);
    }














