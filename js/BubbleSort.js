async function bubbleSort(){
    let ele = document.querySelector("#bars").children;
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<ele.length-i-1;j++){
            ele[j].style.backgroundColor="blue";
            ele[j+1].style.backgroundColor="blue";
            await wait();
            if(toNumber(ele[j].style.height)>toNumber(ele[j+1].style.height)){
                swap(ele[j],ele[j+1]);
                await wait();
            }
            ele[j].style.backgroundColor="red";
            ele[j+1].style.backgroundColor="red";
        }
        ele[ele.length-i-1].style.backgroundColor="green";
    }
    ele[0].style.backgroundColor="green";


}

let bubbleSortButton = document.querySelector('#bubble-sort-btn');
bubbleSortButton.addEventListener('click',async function (){
        disableInputSize();
        disableButtons();
        disableNewArrayButton();
        await bubbleSort();
        enableInputSize();
        enableButtons();
        enableNewArrayButton();
    }
);
