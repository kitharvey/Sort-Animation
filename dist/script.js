import bubble from "./sortingAlgo/bubble.js"
import selection from "./sortingAlgo/selection.js"
import insertion from "./sortingAlgo/insertion.js"
import merge from "./sortingAlgo/merge.js"
import quick from "./sortingAlgo/quick.js"
import heap from "./sortingAlgo/heap.js"
//////////////////////////////////////////////////////////////////////////
const genBtn = document.querySelector('.genBtn')
const sortBtn = document.querySelector('.sortBtn')
const canvas = document.querySelector('.portrait')
const droplist = document.querySelector('.list')
const context = canvas.getContext('2d')
const h = window.innerHeight
const w = window.innerWidth
canvas.height=h-100
canvas.width=w-80
let scale = 5
let ARR
//////////////////////////////////////////////////////////////////////////
// Generate
function generate() {
let arr = []
for (let i=0; i<canvas.width; i+=scale) {
    let rand = getRand(5, canvas.height)
    arr.push(rand)
    }
  draw(arr)
  ARR = arr
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
      context.fillRect(k, canvas.height, scale-1, -x)
      k+=scale
    })
}
function animate(animation){
  for(let i = 0; i <= animation.length-1; i++) {
    setTimeout( () => {
      if(i === animation.length-1) document.querySelector(".buttons").style.pointerEvents = "auto"
      draw(animation[i])
    }, i*scale)
  }
}

//////////////////////////////////////////////////////////////////////////
// swap
export function swap(arr, i, j){
  let displayArray = arr[i];
  arr[i] = arr[j];
  arr[j] = displayArray;
}
//////////////////////////////////////////////////////////////////////////
// bubble sort
function bubbleSort(arr){
  let array = arr.slice()
  draw(array)
  let animation = bubble(array)
  animate(animation)
}
//////////////////////////////////////////////////////////////////////////
// selection sort
function selectionSort(arr){
  let array = arr.slice()
  draw(array)
  let animation = selection(array)
  animate(animation)
}

//////////////////////////////////////////////////////////////////////////
// insertion sort
function insertionSort(arr){
  let array = arr.slice()
  draw(array)
  let animation = insertion(array)
  animate(animation)
}
/////////////////////////////////////////////////////////////////////////////////
// merge sort
function mergeSort(arr){
  let array = arr.slice()
  let arrayCopy = arr.slice(0)
  let animation = merge(array)
  draw(array)
  let d = 0
  let a = 0
  animation.forEach((x) => {
    setTimeout( () => {
      if(a === animation.length-1) document.querySelector(".buttons").style.pointerEvents = "auto"
      const [i, value] = x
      arrayCopy[i] = value
      draw(arrayCopy)
      a++
    }, d*scale)
    d++
  })

}
/////////////////////////////////////////////////////////////////////////////////
// quick sort
function quickSort(arr){
  let array = arr.slice()
  draw(array)
  let animation = quick(array)
  animate(animation)
}
/////////////////////////////////////////////////////////////////////////////////
// heap sort
function heapSort(arr){
  let array = arr.slice()
  draw(array)
  let animation = heap(array)
  animate(animation)
}

/////////////////////////////////////////////////////////////////////////////////
// dropdown selection
function dropdownlist(){
  return droplist.value
}

/////////////////////////////////////////////////////////////////////////////////
// onclick sort
function sort() {
  document.querySelector(".buttons").style.pointerEvents = "none"
  const arr = ARR
  const slct = dropdownlist()
  switch(slct){
    case "bubble":
      bubbleSort(arr);
      break;
    case "selection":
      selectionSort(arr);
      break;
    case "insertion":
      insertionSort(arr);
      break;
    case "merge":
      mergeSort(arr)
      break;
    case "quick":
      quickSort(arr)
      break;
    case "heap":
      heapSort(arr)
      break;
  }
}

function Gen(){
  const arr = generate()
  sortBtn.addEventListener('click', () => sort(arr))
}

//////////////////////////////////////////////////////////////////////////
// Events
genBtn.addEventListener('click', Gen)
droplist.addEventListener('change', dropdownlist)