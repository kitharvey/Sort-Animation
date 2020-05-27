import {swap} from "../script.js"


export default function bubble(arr){
let array = arr.slice(),
len = array.length,
animation = []

    for (let i = len-1; i>=0; i--){
        for(let j = 1; j<=i; j++){
            if(array[j-1] > array[j]){
            animation.push(array.slice(0))
            swap(array, j-1, j)
            } 
        }
    }
return animation
}