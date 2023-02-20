let clickEl = document.getElementById('click-el');
let backColor = document.getElementById('bgColor');
let arrayColors = ['red','yellow','blue', 'green'];

clickEl.addEventListener('click' , function() {
    backColor.textContent = 'Background Color: ' + modifiedRandColor();

});

function getRandomColor() {
    let randomColor = Math.floor(Math.random() * 4);
    return arrayColors[randomColor]
}
console.log( getRandomColor() )












