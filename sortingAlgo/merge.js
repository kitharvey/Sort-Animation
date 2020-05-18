export default function merge(array){
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