
function add_arr(arr1,arr2)
{

    if (arr1.length > arr2.length )
    {
        let temp = arr1
        arr1 = arr2
        arr2 = temp   
        
    }
    
    while (arr1.length != arr2.length){
        arr1.unshift(0)
    }
    
    carry = 0

    for (let i = arr1.length-1; i >-1 ; i--) {

        if(arr2[i]  + arr1[i]  < 10 ){

            carry = 0

            arr2[i]  += arr1[i]
            
        }

        else if (i == 0 && arr2[i] + arr1[i] > 9 ){
            arr2[i] += arr1[0] -10
            arr2.unshift(1)
            return arr2
            
        }

        else  {
            carry = 1
            arr2[i]  += arr1[i] - 10
            arr2[i-1] += 1
        }
        
    }

    return arr2
    
}

let arr1 = [9,9,9]
let arr2 = [9,9]

console.log(add_arr(arr1,arr2))