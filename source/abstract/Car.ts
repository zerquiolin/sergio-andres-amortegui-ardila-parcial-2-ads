export abstract class ICar {
  // Global Variables
  protected brand!: string;
  protected model!: string;
  protected year!: number;
  protected features: Array<string> = [];
  protected price!: number;

  // Abstract Methods
  abstract showFeatures(): Array<string>;
  abstract showPrice(): number;
  abstract showDetails(): {
    model: string;
    year: number;
    features: string[];
    price: number;
  };
}

class Car extends ICar {
  constructor(brand: string, model: string, year: number, price: number) {
    super();
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
  // Abstract Methods Implementation
  showFeatures = (): Array<string> => {
    return this.features;
  };
  showPrice = (): number => {
    return this.price;
  };
  showDetails(): {
    brand: string;
    model: string;
    year: number;
    features: string[];
    price: number;
  } {
    return {
      brand: this.brand,
      model: this.model,
      year: this.year,
      features: this.features,
      price: this.price,
    };
  }
}

export default Car;
