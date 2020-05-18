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
//////////////////////////////////////////////////////////////////////////
// Generate
function generate() {
let arr = []
for (let i=0; i<canvas.width; i+=scale) {
    let rand = getRand(5, canvas.height)
    arr.push(rand)
    }
  draw(arr)
  return arr
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
function bubbleSort(){
  let arr = generate()
  let animation = bubble(arr)
  animate(animation)
}
//////////////////////////////////////////////////////////////////////////
// selection sort
function selectionSort(){
  let arr = generate()
  let animation = selection(arr)
  animate(animation)
}

//////////////////////////////////////////////////////////////////////////
// insertion sort
function insertionSort(){
  let arr = generate()
  let animation = insertion(arr)
  animate(animation)
}
/////////////////////////////////////////////////////////////////////////////////
// merge sort
function mergeSort(){
  let arr = generate()
  let arrayCopy = arr.slice(0)
  let animation = merge(arr)
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
function quickSort(){
  let arr = generate()
  let animation = quick(arr)
  animate(animation)
}
/////////////////////////////////////////////////////////////////////////////////
// heap sort
function heapSort(){
  let arr = generate()
  let animation = heap(arr)
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
  let slct = dropdownlist()
  switch(slct){
    case "bubble":
      bubbleSort();
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