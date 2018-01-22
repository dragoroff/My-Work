var users = []; 
$('document').ready(
  $('#button').click(function(){
var parsed = JSON.parse(localStorage.getItem('obj'));
       for (var j in parsed)
           {
           var name1 = parsed[j].name;
           var age = parsed[j].age;
           var userDate = parsed[j].date;
           var userColor = parsed[j].color;
           $('#result').append('<ul>'+'<li>'+name1+'<br>'+age+'<br>'+userDate+'</li>'+'</ul>').css({'color': userColor, 'border': '2px solid'});   
           } 
    var userName = $('#name').val();
    var userAge = $('#age').val();
    var date = $('#date').val();
    var color = $('#color').val();
 users.push({'name': userName, 'age': userAge, 'date': date, 'color': color});
  localStorage.setItem('obj', JSON.stringify(users));
  $('#box').append('<ul>'+'<li>'+userName+'<br>'+userAge+'<br>'+date+'</li>'+'</ul>').css({'color': color, 'border': '2px solid'});
})
)