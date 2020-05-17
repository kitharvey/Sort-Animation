import {swap} from "../script.js"

export default function heap(arr) {
    let array = arr.slice(0),
    animation=[]
  
    buildMaxHeap(array, animation);
    let end = array.length - 1;
  
    while (end > 0) {
      swap(array, 0, end)
      siftDown(array, 0, end, animation);
      end--;
      animation.push(array.slice(0))
    }
  
    return animation;
  }
  
  function buildMaxHeap(array, animation) {
    let currentIndex = Math.floor(array.length / 2);
    while (currentIndex >= 0) {
      siftDown(array, currentIndex, array.length, animation);
      currentIndex--;
    }
  }
  
  function siftDown(array, start, end, animation) {
    if (start >= Math.floor(end / 2)) {
      return;
    }
    let left = start * 2 + 1,
        right = start * 2 + 2 < end ? start * 2 + 2 : null,
        toSwap;
    if (right) {
      toSwap = array[left] > array[right] ? left : right;
    } else {
      toSwap = left;
    }
    if (array[start] < array[toSwap]) {
      swap(array, toSwap, start)
      animation.push(array.slice(0))
      siftDown(array, toSwap, end, animation);
    }
  }