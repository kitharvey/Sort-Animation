export default function insertion(arr){
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