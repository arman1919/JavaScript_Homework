function sub_arr(arr1, arr2) {
    let result = [];
    let carry = 0;
  
    for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--, j--) {
      let digit1 = i >= 0 ? arr1[i] : 0;
      let digit2 = j >= 0 ? arr2[j] : 0;
  
      let subtractedDigit = digit1 - digit2 - carry;
  
      if (subtractedDigit < 0) {
        subtractedDigit += 10;
        carry = 1;
      } else {
        carry = 0;
      }
  
      result.unshift(subtractedDigit);
    }
  
    while (result[0] === 0 && result.length > 1) {
      result.shift();
    }
  
    return result;
  }
  
  let arr1 = [1,0,0];
  let arr2 = [2, 3];
  
  console.log(sub_arr(arr1,arr2));
  