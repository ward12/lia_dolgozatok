class Car { //kocsi létrehozása
	constructor(name, color){ // meg adjuk a kocsi tulajdonságait
	this.name = name	
	this.tank = 70;
	this.color = color;
	this.fogyaszatas = 5;
	this.utasok = [];
		
	Object.defineProperty(this, 'kerekszam',{ // this.legscount = 4
		value: 4,
		enumerable: false, //amikor végig loop-olok az objecten, akkor kiírja ezt a paramétert
		configurable: true // modosíthatóak ezek a paraméterek

	});
	//a fügvény megvizsgálja,h fehér vagy fehér a kocsi
	if(!this.color){
		this.color="white";
	}
}//construcotr vége
//console.log kiírtjuk a kocsi tulajdonságait
	printallInfo(){
		console.log("rendszám :"+this.name);
		console.log("tank :"+this.tank);
		console.log("fogyaszatas:"+this.fogyaszatas);
		console.log("kerekszam :"+car1.kerekszam)
		console.log("szine :"+this.color)
	}
	//a tank fogyasztása 100 kilométeren
	myCargoing(kilometers) {
		// meg adjuk neki,h ha tankba nincs üzem anyag akkor azt írja ki,h nem indulhatunk el
		let fogyperkm = this.fogyaszatas / 100
		if (this.tank <=0){
			console.log("Nem indulhatunk el")
		}
		//meg adjuk neki,h mennyit fogyaszt a kocsi
		while (kilometers>=0){
			kilometers--;
			this.tank = this.tank -fogyperkm;
		}
		// kerekítés kettő tizedesre
		let eredmenyek = Math.round(this.tank * 100) /100
		console.log(this.name+"rendszámű autó tankjába"+eredmenyek+"liter üzemanyag")
	}




	}
	//new kocsi
	let car1 = new Car("KLA-735");
	car1.printallInfo();
	car1.myCargoing(50);
	//mutáns kocsi tulajdonságai
	class MutantCar extends Car { // extends vissza töltjük a koicsi adatait
	constructor(name, color){
		super(name,color)
		this.name = name
		this.tank = 71721
		this.color = "pruple"
		this.fogyaszatas = 151

		
			Object.defineProperty(this, 'kerekszam',{
			value: 7,
			writable: true,
			enumerable: true,
			configurable: true
		});
	}
	printallInfo(){
		console.log("Az auto rendszám"+this.name);
		console.log("Az auto szine:"+this.color);
		console.log("Az auto tankja: "+this.tank);
		console.log("Az autokerekinek száma :"+mutantcar1.kerekszam);
	}
};
// rendszám kiííratássa
let mutantcar1 = new MutantCar("LÉAAK-112231");
mutantcar1.printallInfo();

