async function mergeSort(low,high){
    if(low<high){
        let mid = Math.floor((low+high)/2);
        await mergeSort(low,mid);
        await mergeSort(mid+1,high);
        await merge(low,mid,high);
    }
}

async function  merge(low,mid,high){
    let ele=document.querySelector('#bars').children;
    let i=low,j=mid+1;
    let space = [];
    while(i<=mid && j<=high){
        ele[i].style.backgroundColor="yellow";
        ele[j].style.backgroundColor="blue";
        await wait();

        if(toNumber(ele[i].style.height)>toNumber(ele[j].style.height)){
            space.push(ele[j].style.height);
            j+=1;

        }
        else if(toNumber(ele[i].style.height)<toNumber(ele[j].style.height)){
            space.push(ele[i].style.height);
            i+=1;
        }
        else{
            space.push(ele[i].style.height);
            space.push(ele[j].style.height);

            i+=1;
            j+=1;
        }
    }


    if(i>mid){
        while (j<=high){
            ele[j].style.backgroundColor="blue";
            await wait();
            space.push(ele[j].style.height);
            j+=1;
        }
    }
    if(j>high){
        while (i<=mid){
            ele[i].style.backgroundColor="yellow";
            await wait();
            space.push(ele[i].style.height);
            i+=1;
        }

    }

    i=low;
    let k=0;
    while(i<=high){
        ele[i].style.height=space[k];
        await wait();
        ele[i].style.backgroundColor="green";
        i+=1;
        k+=1;
    }
    await wait();


}


let mergeSortButton = document.querySelector('#merge-sort-btn');
mergeSortButton.addEventListener('click',async function () {

    disableInputSize();
    disableButtons();
    disableNewArrayButton();
    await mergeSort(0,array.length-1);
    enableInputSize();
    enableButtons();
    enableNewArrayButton();

});
