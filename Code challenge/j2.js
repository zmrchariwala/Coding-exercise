window.onload = processform
function processform()
{
    var form = document.forms["j2"];
    form.onsubmit = calculation;
}
function calculation()
{
    var totalpeople = document.forms["j2"]["totalpeople"].value;
    var zeroday = document.forms["j2"]["day0people"].value;
    var infectby = document.forms["j2"]["infectedby1"].value;
    var res = document.getElementById("result");
    res.innerHTML = "";
    if(totalpeople < 0 || totalpeople === "" || zeroday < 0 || zeroday === "" || infectby < 0 || infectby === "")
    {
        alert("Invalid input");
    }
    else{
        var total =0
        var collection = [];
        collection[0] = zeroday;
        var sum =parseInt(zeroday);
        for(var i=1;totalpeople>sum;i++)
        {
            if(i==1){
               total = zeroday * infectby;
                sum = sum + total;
            }
            else{
                total = total * infectby;
                sum = sum + total;
            }
            if(totalpeople > sum)
            {
                collection[i]= total;
            }

        }
        for(var j=0;j<collection.length;j++)
        {
            res.innerHTML += "<div> Day "+ j + " "+ collection[j] + "</div>"; 
        }
        res.innerHTML += "<div> Day "+ j++ +" infected people will be more than " + totalpeople + " which is "+ sum;
    }
    return false;
}