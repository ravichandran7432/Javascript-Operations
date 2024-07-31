let a = ["a","bb","cc","hhhhhhhhh","ggggg"];
let res = "";
for(let word of a){
    if(word.length > res.length){
        res = word;
    }
}
console.log("Longest string in the array: "+res)