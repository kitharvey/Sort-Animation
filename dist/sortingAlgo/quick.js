import {swap} from "../script.js"

export default function quick(arr){
    let array = arr
    let animation = []
    quickHelper(array, 0, array.length-1, animation)
    return animation
  }
  
  
  function quickHelper(array, left, right, animation){
    let  pivot,
    partitionIndex;
  
   if(left < right){
     pivot = right;
     partitionIndex = partition(array, pivot, left, right, animation);
     
    quickHelper(array, left, partitionIndex - 1, animation);
    quickHelper(array, partitionIndex + 1, right, animation);
   }
   return array;
  }
  
  function partition(arr, pivot, left, right, animation){
    let pivotValue = arr[pivot],
        partitionIndex = left
  
    for(let i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
       animation.push(arr.slice())
     }
   }
    swap(arr, right, partitionIndex);
    animation.push(arr.slice())
    return partitionIndex;
  }