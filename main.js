var credit_list = []
var grade_list = []
grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "P":4,
    "F":0,
    "Ab":0,
    "I":0
};

x = document.getElementById("table1")
y = x.getElementsByTagName('tr')
for (let i = 1; i < y.length; i++) {
  r = y[i].getElementsByTagName('td')
    for (let i = 4; i < 8; i++){
        if(i == 4){
            if(r[i].innerText){
            credit_list.push(parseInt(r[i].innerText))}
            else{
                credit_list.push(0)
            }
        }
        if(i == 7){
            grade_list.push(r[i].innerText)
        }
    }
}

var points = 0;
var sum_credits = 0;
for(let i=0; i<credit_list.length; i++)
    {
        var credit = credit_list[i];
        sum_credits+=credit;
        var gradept = grade_points[grade_list[i]];
        points+=credit*gradept;
    }
var gpa = (points/sum_credits);
console.log(gpa)
