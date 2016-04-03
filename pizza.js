var xmlhttp = new XMLHttpRequest();
var url = "pizza.json";


xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    //parse JSON file an create HTML code 

function myFunction(response){
    var arr = JSON.parse(response);
    var i;
    var out = '<form action="">';
    out += '<h3> Size </h3>';
    out += '<table>';
    for(i = 0; i < arr.Size.length; i++)
    {
     
        out += '<tr><td> <input type="radio" name="size">' + arr.Size[i] + '</input></td> </tr>';
    }
    out += '</table>'
    out += '<div class="toppings"><h3> Toppings </h3>';
    out += '<table>';
    for(i = 0; i < arr.Toppings.length; i++)
    {
        out += '<tr><td><input type="checkbox" name="toppings" value="'+ arr.Toppings[i]+'">' + arr.Toppings[i] + '</input></td> </tr>';
    }
    out += '</table></div>'
    out += '<table><tr><td><h3> Crust </h3> <select name="crust" id="crust"> ';
    for(i = 0; i < arr.Crust.length; i++)
    {
        out += '<option value="'+ arr.Crust[i]+'">'+ arr.Crust[i] + '</option>';
    }
    out += '</select></td></tr>';
    out += '</form>';
   
    document.getElementById("pizza").innerHTML = out;
}
