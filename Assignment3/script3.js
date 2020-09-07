
var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';
var data;




request.onload = function() {
 

 data = JSON.parse(this.responseText)

var e = "<hr/>";   

    
   for (var y=0; y<data.length; y++)
   {
     e += data[y]["name"] + "<br/>";
   }
   document.getElementById("result").innerHTML = e;
}
request.open('GET',url_string , true) ;
request.send();

