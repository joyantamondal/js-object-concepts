/* 
for(i=0;i<10;i++){}
for(const amount of amounts){}//using on an array
for(const props in student){} //using case object

*/

const bottle = {color: 'yellow', hold: 'water', price: 50, isClean: true};
for(const prop in bottle){
    console.log(prop, bottle[prop])

}

const keys = Object.keys(bottle);
for(const prop of keys){
    console.log(prop,bottle[prop]);
}


// advance
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value)
}