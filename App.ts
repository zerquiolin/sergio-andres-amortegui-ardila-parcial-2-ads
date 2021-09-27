// Builder
import CarBuilder from "./source/builderPattern/CarBuilder";
// Builder Director
import CarBuilderDirector from "./source/builderPattern/Director";

// Car Builder

const carBuilder: CarBuilder = new CarBuilder();

// Car Director

const carBuilderDirector: CarBuilderDirector = new CarBuilderDirector(
  carBuilder
);

const basicCar = carBuilderDirector.createDefaultCar();
const polarisedCar = carBuilderDirector.createPolarisedCar();
const goldWheelsCar = carBuilderDirector.createGoldWheelsCar();
const bodyKitCar = carBuilderDirector.createBodyKitCar();
const turboCar = carBuilderDirector.createTurboCar();
const autopilotCar = carBuilderDirector.createAutopilotCar();

console.log("Basic Car: ", basicCar.showDetails());
console.log("Polarised Car: ", polarisedCar.showDetails());
console.log("Gold Wheels Car: ", goldWheelsCar.showDetails());
console.log("Body Kit Car: ", bodyKitCar.showDetails());
console.log("Turbo Car: ", turboCar.showDetails());
console.log("Turbo Car: ", autopilotCar.showDetails());
