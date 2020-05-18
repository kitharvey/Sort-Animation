import {swap} from "../script.js"

export default function selection(arr){
    let array = arr.slice(0),
    minIdx,
    len = array.length,
    animation = []
  
    for(let i = 0; i < len; i++){
      minIdx = i;
      for(let  j = i+1; j<len; j++){
        if(array[j]<array[minIdx]){
            minIdx = j;
         }
      }
      swap(array, i, minIdx)
      animation.push(array.slice(0))
    }
    return animation
  }