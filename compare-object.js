const first = {a:1, b:2};
const second = {a:1, b:2};

// objects are compareable if they have same reference 
const third = first;
if(first===third){
    console.log('Objects are equal');
}
else{
    console.log('object not equal');
}

// compare two objects 
const first2 = {a:1, b:2};
const second2 = {b:2, a:1};

function compareObjects(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true
    
  

}
const objectCheck = compareObjects(first2,second2);
console.log(objectCheck)