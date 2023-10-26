function solve(val)
{
    var v=document.getElementById('ans');
    v.value += val;
}
function result()
{
    var v1=document.getElementById('ans').value;
    var v2=eval(v1);
    document.getElementById('ans').value=v2;
}
function clear()
{
var input=document.getElementById('ans');
input.value='';
}
function back()
{
    var back=document.getElementById('ans');
    back.value=back.value.slice(0,-1);
}


