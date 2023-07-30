// Average Marks of Mathematics, Biology, Chemistry, Physics and Bangla

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalSubjects = 5;
var totalNumber = mathematics + biology + chemistry + physics + bangla;
console.log(totalNumber)

var averageNumber = totalNumber / totalSubjects;

// 2 decimal porjono dekhanur jonnoo ei part 

var averageNumber2Decimal = averageNumber.toFixed(2);
console.log(averageNumber2Decimal)
