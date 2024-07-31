let arra = [4,5,6,3,2,5,4];
let maxEle = 0;
let minEle = 100;
for(let i=0;i<arra.length;i++){
    if(arra[i]>maxEle){
        maxEle=arra[i];
    }
    if(arra[i]<minEle){
        minEle = arra[i];
    }
}
console.log("Maximum element of the array: "+maxEle);
console.log("Minimum element of the array: "+minEle);