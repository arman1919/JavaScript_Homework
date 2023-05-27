function findLongestWord(words){
    arr = words.split(" ")
    
    maxword = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxword.length){
            maxword = arr[i]
        }
    
    }
    return maxword
    
}

console.log(findLongestWord("helrglo wofglrd artg"))