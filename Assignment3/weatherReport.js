function getInputByName()
{
var request = new XMLHttpRequest()
var cityName = document.getElementById("cityName").value
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=3b40c3ec0d8f4874b94afafb72b3e48f';
var data;




request.onload = function() {
 

 data = JSON.parse(this.responseText)

console.log(data);
var e = "</br>";
e+= JSON. stringify(data);+"</br>";
   document.getElementById("result").innerHTML = e;
}
request.open('GET',url_string , true) ;
request.send();


}
function getInputByID()
{
var request = new XMLHttpRequest()
var cityName = document.getElementById("cityID").value
var url_string = 'https://api.openweathermap.org/data/2.5/weather?id='+cityName+'&appid=3b40c3ec0d8f4874b94afafb72b3e48f';
var data;




request.onload = function() {
 

 data = JSON.parse(this.responseText)

console.log(data);
var e = "</br>";
e+= JSON. stringify(data);+"</br>";
   document.getElementById("result").innerHTML = e;
}
request.open('GET',url_string , true) ;
request.send();


}
