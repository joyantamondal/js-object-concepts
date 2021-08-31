const bottle = {color: 'yellow', hold: 'water', price: 50, isClean: true};
const keys = Object.keys(bottle);
//geetting all properties name
console.log(keys);
//geeting all  values
const values = Object.values(bottle);
console.log(values);

//getting all entities/pairs

const pairs = Object.entries(bottle);
console.log(pairs);
/* 
//if we dont want to delete any properties from an object or array then it should be use seal
// is wee add seal then we can change properties values bt cannot delete or add new property
Object.seal(bottle);
bottle.price=100;
bottle.height= 16;
console.log(bottle); 
*/

// is we use freeze we cannot change any property valu and cannt add or delete any property into objec 
Object.freeze(bottle)
bottle.price=100;
bottle.height= 16;
//delete one properties and its values
delete bottle.isClean;
console.log(bottle);

