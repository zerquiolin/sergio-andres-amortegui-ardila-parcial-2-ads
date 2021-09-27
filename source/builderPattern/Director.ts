import Car, { ICar } from "../abstract/Car";
import CarBuilder from "./CarBuilder";

class CarBuilderDirector {
  carBuilder!: CarBuilder;
  constructor(car: CarBuilder) {
    this.carBuilder = car;
  }

  //   Basic Cars
  TeslaX = new Car("Tesla", "Model X", 2019, 25000);
  TeslaS = new Car("Tesla", "Model X", 2019, 20000);

  //   Directed Cars
  createDefaultCar = (): ICar => this.carBuilder.create().Deliver();
  createPolarisedCar = (): ICar =>
    this.carBuilder.create(this.TeslaX).addPolarisedWindows().Deliver();
  createGoldWheelsCar = (): ICar =>
    this.carBuilder
      .create(this.TeslaS)
      .addPolarisedWindows()
      .addGoldWheels()
      .Deliver();
  createBodyKitCar = (): ICar =>
    this.carBuilder
      .create()
      .addPolarisedWindows()
      .addGoldWheels()
      .addBodyKit()
      .Deliver();
  createTurboCar = (): ICar =>
    this.carBuilder
      .create()
      .addPolarisedWindows()
      .addGoldWheels()
      .addBodyKit()
      .addTurbo()
      .Deliver();
  createAutopilotCar = (): ICar =>
    this.carBuilder
      .create(this.TeslaS)
      .addPolarisedWindows()
      .addGoldWheels()
      .addBodyKit()
      .addTurbo()
      .addAutopilot()
      .Deliver();
}

export default CarBuilderDirector;
