function bubbleSort(arr) {
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j < arr.length - i + 1; j++) {
      if(i!=0 & arr[j]<arr[j-1]) {
        let buf = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = buf
      }
    }
  }
  return arr
}

module.exports = bubbleSort