// function validateEmail(email){
//     var allowed=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/; 
//     return allowed.test(email);}


// const num=[1,2,3,4,5];
// num.forEach(function(num){
//     console.log(num);
// });

// const fruits=["apple","orange","Mango","Watermelon","lemon"];
// fruits.forEach(function(fruits){
//     console.log(fruits);
// });

// const fruit=["apple","orange","Mango","Watermelon","lemon"];
// fruit.forEach(function(fruit,index){
//     console.log(index+":"+fruit);
// });

// const num=[1,2,3,4,5];
// const doubled=num.map(function(num){
//     return num*2;
// })
// console.log(doubled);


// let map=new Map();
// map.set("name",'angel');
// map.set('age',20);
// map.set(true,'boolean key')
// console.log(map.get('name'));

// let arr=[1,2,3,4,5,6,7,8,9]
// let myset=new Set(arr)
// console.log(myset);

// let set=new Set()
// set .add(1);
// set.add(5);
// set.add("some text");
// set.add({a:1,b:2});
// console.log(set.has(1));

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
// })


let arr = new Array(1,2,3,4,5);
console.log(arr);

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);


let ar = new Array(1,2,3,4,5);
console.log("Index position of 3 in the array: "+ar.indexOf(3));

// let arr = new Array(4,5,6,3,2,5,4);
// console.log("Array before sorting: "+arr);
// arr.sort();
// console.log("Array after sorting: "+arr);


// let arr = [4,5,6,3,2,5,4];
// let maxEle = 0;
// let minEle = 100;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>maxEle){
//         maxEle=arr[i];
//     }
//     if(arr[i]<minEle){
//         minEle = arr[i];
//     }
// }
// console.log("Maximum element of the array: "+maxEle);
// console.log("Minimum element of the array: "+minEle);


// let arr = ["a","bb","cc","hhhhhhhhh","ggggg"];
// let res = "";
// for(let word of arr){
//     if(word.length > res.length){
//         res = word;
//     }
// }
// console.log("Longest string in the array: "+res)