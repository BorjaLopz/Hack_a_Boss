const car = {
  wheels: 4, 
  doors: 5, 
  kmsPerLiter: 10,
  avanzar: function (mts) {
    console.log(`Subiendo ${mts} metros\nGastará ${mts / this.kmsPerLiter} litros`);
  }, 
  retroceder: () => {
    console.log(this);
  }
}

car.avanzar(100);
car.retroceder();