function sum()
{
	var a=document.getElementById('firstno').value;
	var b=document.getElementById('secondno').value;
	var sum=parseInt(a)+parseInt(b);
	document.getElementById('result').value=sum;
}
function sub()
{
	var a=document.getElementById('firstno').value;
	var b=document.getElementById('secondno').value;
	var sub=parseInt(a)-parseInt(b);
	document.getElementById('result').value=sub;
}
function mul()
{
	var a=document.getElementById('firstno').value;
	var b=document.getElementById('secondno').value;
	var mul=parseInt(a)*parseInt(b);
	document.getElementById('result').value=mul;
}
function div()
{
	var a=document.getElementById('firstno').value;
	var b=document.getElementById('secondno').value;
	var div=parseInt(a)/parseInt(b);
	if (b === 0) {
        alert("Cannot divide by zero.");
        return;
    }
	document.getElementById('result').value=div;
}