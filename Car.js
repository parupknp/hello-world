class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
	console.log(this.name,this.year)
  }
}
let myCar1 = new car("Ford", 2014);
module.exports=Car;
