window.onload = processform
function processform()
{
    var form = document.forms["j3"];
    form.onsubmit = calculation;
}
function calculation()
{
    var inputdata = [];
    inputdata[0] = document.forms["j3"]["first"].value;
    inputdata[1] = document.forms["j3"]["second"].value;
    inputdata[2] = document.forms["j3"]["third"].value;
    inputdata[3] = document.forms["j3"]["fourth"].value;
    inputdata[4] = document.forms["j3"]["fifth"].value;
    var bottom_left_corner = [];
    var top_right_corner = [];
    var right = [];
    var left = [];
    var cc=0;
    var temp = [2];
    for(var i=1;i<=5;i++,cc++)
    {
        temp = inputdata[i].split(",");
        left[cc] = temp[0];
        right[cc] = temp[1];
    }
    var min = left[0];
    var max = left[0];
    for(var i=0;i<5;i++)
    {
        if(left[i]<=min)
        {
            min = left[i];        
        }
        if(left[i] >= max)
        {
            max = left[i];        
        }
        
    }
    bottom_left_corner[0] = min;
    top_right_corner[0] = max;
    var min = right[0];
    var max = right[0];
    for(var i=0;i<5;i++)
    {
        if(right[i]<=min)
        {
            min = right[i];        
        }
        if(right[i] >= max)
        {
            max = right[i];        
        }
        
    }
    bottom_left_corner[1] = min;
    top_right_corner[1] = max;
    
    var res = document.getElementById("result");
    res.innerHTML += "Bottom left corner is ("+ bottom_left_corner[0]-- +","+ bottom_left_corner[1]-- +")";
    res.innerHTML += "Top right corner is ("+ top_right_corner[0]++ +","+ top_right_corner[1]++ +")";
    
    
    return false;
    
}
