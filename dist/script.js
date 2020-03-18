// import bubble from './bubble-sort'

// console.log(bubble)

//////////////////////////////////////////////////////////////////////////
const genBtn = document.getElementById('genBtn')
const sortBtn = document.getElementById('sortBtn')
const canvas = document.getElementById('portrait')
const droplist = document.getElementById('list')
const context = canvas.getContext('2d')
const h = window.innerHeight
const w = window.innerWidth
let scale = 1
let arr = []
let arrayCopy = []
canvas.height=h-120
canvas.width=w-120


//////////////////////////////////////////////////////////////////////////
// Generate
function generate() {
arr = []
for (let i=0; i<canvas.width; i+=scale) {
    let rand = getRand(5, canvas.height)
    arr.push(rand)
    }
    arrayCopy = arr.slice()
    draw(arr)
}


//////////////////////////////////////////////////////////////////////////
// Get random
function getRand(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}


//////////////////////////////////////////////////////////////////////////
// display animation
function draw(array) {
    context.clearRect(0,canvas.height,canvas.width,-canvas.height);
    let k = 0
    array.forEach(x => {
      context.fillStyle = '#b2bcc5'
      context.fillRect(k, canvas.height, scale, -x)
      k+=scale
      })
}


//////////////////////////////////////////////////////////////////////////
// swap
function swap(arr, i, j){
  let displayArray = arr[i];
  arr[i] = arr[j];
  arr[j] = displayArray;
}


//////////////////////////////////////////////////////////////////////////
//bubble sort
function bubble(arr){
  let array = arr,
  len = array.length,
  animation = []

    for (let i = len-1; i>=0; i--){
      for(let j = 1; j<=i; j++){
        if(array[j-1] > array[j]){
          swap(array, j-1, j)
         } 
      }
      animation.push(array.slice(0))
    }
    return animation
}

function bubbleSort(){
  let animation = bubble(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      draw(x)
    }, d*scale)
    d++
  })
}


//////////////////////////////////////////////////////////////////////////
// selection sort
function selection(arr){
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

function selectionSort(){
  let animation = selection(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      draw(x)
    }, d*scale)
    d++
  })
}


//////////////////////////////////////////////////////////////////////////
// insertion sort
function insertion(arr){
  let array = arr,
  length = array.length,
  animation = []
  for (let i = 1; i < length; i++) {

      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
          j = j - 1;   
      }
      array[j + 1] = key;
      animation.push(array.slice(0))
  }
  return animation
}

function insertionSort(){
  let animation = insertion(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      draw(x)
    }, d*scale)
    d++
  })
}

/////////////////////////////////////////////////////////////////////////////////
// merge sort
function merge(array){
  const aux = array.slice()
  const animation = []
  mergeHelper(array, 0, array.length-1, aux, animation)
  return animation
}

function mergeHelper(mainArray, start, end, aux, animation){
  if(start===end) return

  let mid = Math.floor((start+end)/2)
  mergeHelper(aux, start, mid, mainArray, animation)
  mergeHelper(aux, mid+1, end, mainArray, animation)
  doMerge(mainArray, start, mid, end, aux, animation)

}

function doMerge(mainArray, start, mid, end, aux, animation){
let i = start
let j = start
let k = mid+1

while(j <= mid && k <= end){
  if(aux[j] <= aux[k]){
    animation.push([i, aux[j]])
    mainArray[i] = aux[j]
    i++
    j++
    }
  else {
    animation.push([i, aux[k]])
    mainArray[i] = aux[k]
    i++
    k++
    }
  }
while(j <= mid) {
  animation.push([i, aux[j]])
  mainArray[i] = aux[j]
  i++
  j++
  }
while(k <= end) {
  animation.push([i, aux[k]])
  mainArray[i] = aux[k]
  i++
  k++
  }
}

function mergeSort(){
  let animation = merge(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      const [i, value] = x
      arrayCopy[i] = value
      draw(arrayCopy)
    }, d*scale)
    d++
  })
}

/////////////////////////////////////////////////////////////////////////////////
// quick sort
function quick(arr){
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

function quickSort(){
  let animation = quick(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      draw(x)
    }, d*scale)
    d++
  })
}


/////////////////////////////////////////////////////////////////////////////////
// heap sort
function heap(arr) {
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

function heapSort(){
  let animation = heap(arr)
  let d = 0
  animation.forEach((x) => {
    setTimeout( () => {
      draw(x)
    }, d*scale)
    d++
  })
}


/////////////////////////////////////////////////////////////////////////////////
// dropdown selection
function dropdownlist(){
  return droplist.value
}

/////////////////////////////////////////////////////////////////////////////////
// onclick sort
function sort() {
  let slct = dropdownlist()
  switch(slct){
    case "bubble":
      bubbleSort(arr);
      break;
    case "selection":
      selectionSort();
      break;
    case "insertion":
      insertionSort();
      break;
    case "merge":
      mergeSort()
      break;
    case "quick":
      quickSort()
      break;
    case "heap":
      heapSort()
      break;
  }
}


//////////////////////////////////////////////////////////////////////////
// Events
genBtn.addEventListener('click', generate)
sortBtn.addEventListener('click', sort)
droplist.addEventListener('change', dropdownlist)   