function Reverse_(data){
    if (typeof(data) == "number"){
        return data.toString()
    }

    else if (/^\d+$/.test(data)){
        return   +data.split("").reverse().join("")
    }

    else if (typeof(data) == "boolean"){
        return data.toString().split("").reverse().join("")
    }

    else if (typeof(data) == "string" ){
        return data.split("").reverse().join("")
    }
    
    return "Type Error"
}



console.log( typeof Reverse_(12))

console.log( Reverse_("156"))

console.log( Reverse_("hello"))

console.log( Reverse_(true))