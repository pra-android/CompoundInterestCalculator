function clickme()
{
	let Principal=document.getElementById('p').value;
	let Rate=document.getElementById('r').value;
	let Time=document.getElementById('t').value;

	let ci = Principal * Math.pow((1 + Rate / 100), Time);
	document.getElementById('pass').innerHTML=" Compound Interest=Rs "+ ci;

}