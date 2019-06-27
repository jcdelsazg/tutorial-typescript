abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

interface CarI {
  description: string;
  getDescription(): string;
  cost(): number;
}

class ModelS extends Car {
  public description = 'Model S';

  public cost(): number {
    return 7300;
  }
}

class ModelX implements CarI {
  public description = 'Model X';

  public cost(): number {
    return 7700;
  }
  public getDescription(): string {
    return this.description;
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ' Enhanced Auto pilot';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFancingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ' Rear fancing seats';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

console.log('MyCar with abstract class');

let myCar = new ModelS();
myCar = new EnhancedAutoPilot(myCar);

console.log(
  'Enhanced car with autopilot: ' +
    myCar.getDescription() +
    ', cost: ' +
    myCar.cost()
);

myCar = new RearFancingSeats(myCar);
console.log(
  'Enhanced car with seats: ' +
    myCar.getDescription() +
    ', cost: ' +
    myCar.cost()
);

console.log('MyCar with interface');

let myCar2 = new ModelX();
myCar2 = new EnhancedAutoPilot(myCar2);

console.log(
  'Enhanced car with autopilot: ' +
    myCar2.getDescription() +
    ', cost: ' +
    myCar2.cost()
);

myCar2 = new RearFancingSeats(myCar2);
console.log(
  'Enhanced car with seats: ' +
    myCar2.getDescription() +
    ', cost: ' +
    myCar2.cost()
);
