const student=
{
    id:101,
    name:'Saifurs Sir',
    major:'Math',
    money:5000,
    subject:['english','economics','bangla'],
    bestFreind: 
    {
        name:'kumkum',
        major: 'Math'
    },
    takeExam: function(){
        console.log(this.name,'exam taken',this.bestFreind.name);
    },
    treatDay: function(expense,tips){
        this.money = this.money-expense-tips;
        return this.money;

    }

}
student.takeExam();
const remainBalance = student.treatDay(3000,100);
console.log(remainBalance)