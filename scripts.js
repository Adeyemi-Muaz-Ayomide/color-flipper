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

function modifiedRandColor() {

    if (getRandomColor() === 'green') {
        return document.body.style.backgroundColor = 'green';
    } else if(getRandomColor() === 'blue'){
        return document.body.style.backgroundColor = 'blue';
    }  else if(getRandomColor() === 'red'){
        return document.body.style.backgroundColor = 'red';
    } else{
        return document.body.style.backgroundColor = 'yellow';
    }

}








