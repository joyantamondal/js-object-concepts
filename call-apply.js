const johnDoe=
{
    id:101,
    name:'Saifurs Sir',
    major:'Math',
    money:5000,
    subject:['english','economics','bangla'],
    treatDay: function(expense,tips,tax){
        this.money = this.money-expense-tips-tax;
        console.log(this.name,this);
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
}
const pm= {
    id: 103,
    name: 'PM',
    money: 10000
}

// call
// johnDoe.treatDay.call(heroBalam,3000,100);
// johnDoe.treatDay.call(pm,8000,500);

// apply
johnDoe.treatDay.apply(pm,[1000,50,10]);
