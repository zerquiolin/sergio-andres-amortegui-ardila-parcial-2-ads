import { ICar } from "../abstract/Car";

abstract class ICarDecorator extends ICar {
  // Global Variables
  car!: ICar;
}

export class PolarisedWindowsDecorator extends ICarDecorator {
  constructor(car: ICar) {
    super();
    this.car = car;
  }
  showFeatures(): Array<string> {
    return [...this.car.showFeatures(), "Polarised Windows"];
  }
  showPrice(): number {
    return this.car.showPrice() + 1500;
  }
  showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      ...this.car.showDetails(),
      features: [...this.car.showFeatures(), "Polarised Windows"],
      price: this.car.showPrice() + 1500,
    };
  }
}
export class AutopilotDecorator extends ICarDecorator {
  constructor(car: ICar) {
    super();
    this.car = car;
  }
  showFeatures(): Array<string> {
    return [...this.car.showFeatures(), "Autopilot"];
  }
  showPrice(): number {
    return this.car.showPrice() + 2000;
  }
  showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      ...this.car.showDetails(),
      features: [...this.car.showFeatures(), "Autopilot"],
      price: this.car.showPrice() + 2000,
    };
  }
}
export class GoldWheelsDecorator extends ICarDecorator {
  constructor(car: ICar) {
    super();
    this.car = car;
  }
  showFeatures(): Array<string> {
    return [...this.car.showFeatures(), "Gold Wheels"];
  }
  showPrice(): number {
    return this.car.showPrice() + 5000;
  }
  showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      ...this.car.showDetails(),
      features: [...this.car.showFeatures(), "Gold Wheels"],
      price: this.car.showPrice() + 5000,
    };
  }
}
export class BodyKitDecorator extends ICarDecorator {
  constructor(car: ICar) {
    super();
    this.car = car;
  }
  showFeatures(): Array<string> {
    return [...this.car.showFeatures(), "Body Kit"];
  }
  showPrice(): number {
    return this.car.showPrice() + 2500;
  }
  showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      ...this.car.showDetails(),
      features: [...this.car.showFeatures(), "Body Kit"],
      price: this.car.showPrice() + 2500,
    };
  }
}
export class TurboDecorator extends ICarDecorator {
  constructor(car: ICar) {
    super();
    this.car = car;
  }
  showFeatures(): Array<string> {
    return [...this.car.showFeatures(), "Turbo"];
  }
  showPrice(): number {
    return this.car.showPrice() + 1000;
  }
  showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      ...this.car.showDetails(),
      features: [...this.car.showFeatures(), "Turbo"],
      price: this.car.showPrice() + 1000,
    };
  }
}
