// Import Car and its Abstract Class
import Car, { ICar } from "../abstract/Car";
// Import all Car Decorators
import {
  PolarisedWindowsDecorator,
  AutopilotDecorator,
  BodyKitDecorator,
  GoldWheelsDecorator,
  TurboDecorator,
} from "../decoratorPattern/CarDecorator";

class CarBuilder {
  // Global Variables
  car!: ICar;

  //   Creates an instance of the car
  create = (
    car?: ICar,
    brand: string = "Defautl Brand",
    model: string = "Default Model",
    year: number = 0,
    price: number = 0
  ) => {
    this.car = car ? car : new Car(brand, model, year, price);
    return this;
  };
  //   Returns the instance
  Deliver = (): ICar => {
    return this.car;
  };

  //   Car Decorator - Add features to the car
  addPolarisedWindows = (): CarBuilder => {
    if (this.existFeature("Polarised Windows")) {
      return this;
    }
    this.car = new PolarisedWindowsDecorator(this.car);
    return this;
  };
  addAutopilot = (): CarBuilder => {
    if (this.existFeature("Autopilot")) {
      return this;
    }
    this.car = new AutopilotDecorator(this.car);
    return this;
  };
  addGoldWheels = (): CarBuilder => {
    if (this.existFeature("Gold Wheels")) {
      return this;
    }
    this.car = new GoldWheelsDecorator(this.car);
    return this;
  };
  addBodyKit = (): CarBuilder => {
    if (this.existFeature("Body Kit")) {
      return this;
    }
    this.car = new BodyKitDecorator(this.car);
    return this;
  };
  addTurbo = (): CarBuilder => {
    if (this.existFeature("Turbo")) {
      return this;
    }
    this.car = new TurboDecorator(this.car);
    return this;
  };

  //   Verifies if the feature have already been added
  existFeature = (feature: string): boolean => {
    const features: Array<string> = this.car.showFeatures();

    if (features.includes(feature)) {
      return true;
    }

    return false;
  };
}

export default CarBuilder;
