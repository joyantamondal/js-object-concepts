const johnDoe=
{
    id:101,
    name:'Saifurs Sir',
    major:'Math',
    money:5000,
    subject:['english','economics','bangla'],
    treatDay: function(expense){
        this.money = this.money-expense;
        console.log(this);
        return this.money;

    }

}
const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 6000
}
johnDoe.treatDay(1000);
const heroTreatDey = johnDoe.treatDay.bind(heroBalam);
heroTreatDey(1000);
