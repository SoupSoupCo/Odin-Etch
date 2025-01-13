const container = document.querySelector('#container');


function createDiv(aNum) {
    if (aNum > 100){
        for (let i = 0; i < (100 * 100); i++) {
            const theDivs = document.createElement('div');
            theDivs.classList.add('dot');
            container.append(theDivs);
        } 
    }
    else {
        for (let i = 0; i < (aNum * aNum); i++) {
            const theDivs = document.createElement('div');
            theDivs.classList.add('dot');
            container.append(theDivs);
        }
    } 
}
createDiv(prompt('How many divs do you want. Limit 100.'));

let divs = document.querySelectorAll('.dot');
let divsArray = Array.from(divs);

function arrayEventListener(){
    divsArray.forEach((div) => {
        div.addEventListener('mouseover', ()=> {
            div.style.backgroundColor = 'Yellow';
        })
    })
}
arrayEventListener();
console.log('When Site loads:',divsArray);

const theBtn = document.querySelector('#button');

console.log('When Site loads:',divs);


theBtn.addEventListener('click', ()=> {
    container.innerHTML = '';

    function createNewDiv(aNum) {
        if (aNum > 100){
            for (let i = 0; i < (100 * 100); i++) {
                const theDivs = document.createElement('div');
                theDivs.classList.add('dot');
                container.append(theDivs);
            } 
        }
        else {
            for (let i = 0; i < (aNum * aNum); i++) {
                const theDivs = document.createElement('div');
                theDivs.classList.add('dot');
                container.append(theDivs);
            }
        } 
    }
    createNewDiv(prompt('How many divs do you want. Limit 100.'));
    
    let newdivs = document.querySelectorAll('.dot');
    let newDivsArray = Array.from(newdivs);

    newDivsArray.forEach((div) => {
        div.addEventListener('mouseover', ()=> {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
        })
    })
    console.log('For event Listener:',newdivs);
    console.log('When Site loads:',newDivsArray);
});