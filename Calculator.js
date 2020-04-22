function Show(val){
    document.getElementById("display").value += val;
}
function Calc()
{
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
}