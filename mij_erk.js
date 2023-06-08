function mij_erk_arr(arr){
    let count = 0

    mul = 1
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "number"){
            count ++ ;
            mul *= arr[i] 

        }
        
        }
    return mul**(1/count)

}



let arry = [1,"a",2,"b",3,"c",4,"d",5]

console.log(mij_erk_arr(arry))