let Student = {};
Student['name'] = 'John';
Student['last name'] = 'Bryce';
Student['address'] = 'Tel Aviv';
Student['grades'] = [];
Object.defineProperty(Student, 'setGrades', {set: function (marks){
    this.grades.push(marks)
}});
Student.setGrades = 95;
Student.setGrades = 85;
Student.setGrades = 75;
Object.defineProperty(Student, 'averageGrade', {get: function()
{
    let sum = this.grades.reduce(function(a,b)
{
    return a+b;
})
return Math.round(sum/this.grades.length);
}})
Student.toString = function() {
    return `Full Name: ${this.name} ${this['last name']}
Address: ${this['address']}
Grades: ${this.grades}
Average Grade: ${this.averageGrade}`
}
alert(Student.toString());