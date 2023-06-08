function obj_eq(ob1,ob2){

    let ob3 = {}
    let ob4 = Object.assign({}, ob1, ob2)
    for (let key1 in ob1){
        for( let key2 in ob2){
            if (key1 == key2 && ob1[key1] == ob2[key2]){
                
                ob3[key1] = ob1[key1] 

            }
        }
        
    }
    for(let key in ob3){
        delete ob4[key]
    }
    
    return ob4
}





let obj1 = {
    a : "hello",
    b : 15,
    c : "world",
    e : 0,
    f : "aaa",
}

let obj2 = {
    a : "bye",
    b : 12,
    c : "world",
    e : 0,
}

console.log(obj_eq(obj1,obj2))