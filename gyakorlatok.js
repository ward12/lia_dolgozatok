/*jshint esnext: true*/
/*jshint devel: true*/
/*jslint node: true*/
/*jslint browser: true*/
/*jslint jquery: true*/

'use strict';
console.log("FASZ");
//csere
let a = 6;
let b = 2;
let c;
console.log("csere elott> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+" b = "+b);
//összegzés
let x = [5, 7, 2, 9, 5, 4, 2];
let osszeg = 0;
let van = false;

for (let i = 0; i<x.length;i++) {
	osszeg=osszeg+x[i];
}
//eldöntés
console.log("tömb összege :"+osszeg);
console.log("LEGYEN TÁNC");

let i = 0;
while (i < x.length && x[i]!==2){
	i++;
}
if(i<=x.length){
	van = true;
}
console.log(van);
//liárlis keresés
let sorszam;
while (i < x.length && x[i]!==2){
	i++;
}
if(i<=x.length){
	van = true;
}
if (van){
	sorszam = i;
}
console.log("ittvan a szam :"+sorszam);

// meg számlálás
let db = 0;
for(i=0; i < x.length; i++){
	if (x[i] ===2){
		db++;
	}
	
}

console.log("számolunk :"+db);
// maximum 
let max = 0;
	for(i=1; i < x.length; i++){
		if (x[i] > x[max]){
		max = i;
	}
	}
console.log("legnagyobb elem :"+max);	

//buborékrendezés
for (i=x.length;i>2;i--){
	for (let j=0; j<i-1;j++){
		if(x[j]>x[j+1]){
			c = x[j];
			x[j] = x[j+1];
			x[j+1] = c;

		}
	}


}
console.log("rendezett buborék: "+x);

//minimum kiválasztás
x = [5, 7, 2, 9, 5, 4, 2];
let min = 0;
console.log("rendeztlen tomb:"+x);

for(i=0; i<x.length-1;i++){
	min = i;
	for(let j=i+1;j<x.length;j++){
	if(x[min]>x[j]){
		min = j;
		}
	}
	c=x[i];
	x[i]=x[min];
	x[min]=c;
}
	console.log("legkisebb :"+x);

//FAKTORIÁLIS
function fakt (n)
{
	if( n ===0){
		return 1;
		}else{
		return(n* fakt(n- 1));

	}
}
console.log("4! ="+fakt(4));

