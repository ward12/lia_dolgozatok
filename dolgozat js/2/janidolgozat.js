'use strict'
let tomb = [2 ,4 ,5 ,"4", "Bela"]
let osszeg = 0;
for (let z = 0; z<tomb.length; i++)
{
	if (typeof(tomb[z]) === 'number'){
		console.log("SZAM. "+tomb[z]);

	} else {
		console.log("ez nem szam: "+tomb[z]);
	}
}
console.log("tombosszege: "+osszeg);