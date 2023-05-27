function getDuplicaters(arr){
    let duplicates = [];

    for (let i =0; i < arr.length; i++){

        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])){
            duplicates.push(arr[i])

        }
        
        }

    return duplicates
}


arr = [15,55,15,26,654,55,15,26]

console.log(getDuplicaters(arr))