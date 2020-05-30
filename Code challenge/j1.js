window.onload = processform
function processform()
{
    var form = document.forms["j1"];
    form.onsubmit = calculation;
    
}
function calculation()
{
    var smallmeals = document.forms["j1"]["smallmeals"].value;
    var mediummeals = document.forms["j1"]["mediummeals"].value;
    var largemeals = document.forms["j1"]["largemeals"].value;
    if((smallmeals < 0)||(smallmeals === "")||(mediummeals < 0)||(mediummeals === "")||(largemeals < 0)||(largemeals === "")){
        alert("Invalid input");
    }
    else{
        var result = document.getElementById("result");
        var cal = (1 * parseInt(smallmeals))+(2*parseInt(mediummeals))+(3*parseInt(largemeals));
        if(cal >= 10){
            result.innerHTML = "Dog is HAPPY";
        }else{
            result.innerHTML = "Dog is SAD";
        }
    }
    return false;
    
}