function sortArray(arr) {
    let len = arr.length
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  
    return arr
  }
  

  let array = [5, 3, 8, 2, 1, 4]
  console.log(sortArray(array))
