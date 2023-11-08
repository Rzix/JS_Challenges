const arr = [1, 2, 3, 4, 5];
const arr2 = [2, 4];
let allArr = [];


function customArrayDiff(a,b){
allArr.push(...a, ...b);
const repeatedElements = allArr.filter(
  (element) => allArr.indexOf(element) == allArr.lastIndexOf(element)
);
    return repeatedElements;
}

console.log(customArrayDiff(arr,arr2));