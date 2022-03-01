//global array
let array;
let arraySize;
let speed=1;

//disabling all sorting buttons
let disableButtons = function () {
    document.querySelector('#selection-sort-btn').disabled=true;
    document.querySelector('#quick-sort-btn').disabled=true;
    document.querySelector('#merge-sort-btn').disabled=true;
    document.querySelector('#bubble-sort-btn').disabled=true;

};

//disabling input size and speed
let disableInputSize = function () {
    document.querySelector('#array-size').disabled=true;

}


//enabling input size and speed
let enableInputSize = function () {
    document.querySelector('#array-size').disabled=false;

}

//enabling all sorting buttons
let enableButtons = function () {
    document.querySelector('#selection-sort-btn').disabled=false;
    document.querySelector('#quick-sort-btn').disabled=false;
    document.querySelector('#merge-sort-btn').disabled=false;
    document.querySelector('#bubble-sort-btn').disabled=false;

};


//disabling the new Array button
let disableNewArrayButton = function () {
    document.querySelector('#new-array-btn').disabled = true;
};


//enabling the new Array button
let enableNewArrayButton = function () {
    document.querySelector('#new-array-btn').disabled = false;

};

//generates a new array of size 125
let generateNewArray = (x=10)=>{
    array = [];
    for(let i=0;i<x;i++){
        let num = Math.floor(Math.random()*20);
        if(num===0){
            num=20;
        }
        array.push(num);
    }
    return array;
};


//displays the bars
let displayArray = (array) =>{
    let htmlTemplate = ``;
    for(let value of array){
            htmlTemplate+=`<div class="bars" style="width:10px;height:${30*value}px;"></div>`;

    }
    document.querySelector('#bars').innerHTML=htmlTemplate;

}


//click event on new Array Button
let newArrayButton = document.querySelector('#new-array-btn');
newArrayButton.addEventListener('click',()=>{
    array = generateNewArray(arraySize);
    displayArray(array);

});

//displays the array initially
window.addEventListener('DOMContentLoaded',()=>{
    array = generateNewArray(10);
    displayArray(array);

});

//swap function that takes two input elements(divs) and swaps their heights
function swap(ele1,ele2) {
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;

}

//let's wait
function wait(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('');
        },500/speed);
    });
}

//array-size
let arraySizeEle = document.querySelector('#array-size');
arraySizeEle.addEventListener('input',function(){
    arraySize=Number.parseInt(arraySizeEle.value);
    array = generateNewArray(arraySize);
    displayArray(array);
})

//speed
let speedEle = document.querySelector('#speed');
speedEle.addEventListener('input',function () {
    speed=Number.parseInt(speedEle.value);
});

//px to number
let toNumber = (height)=>{
    return Number.parseInt(height.replace('px',''));
}