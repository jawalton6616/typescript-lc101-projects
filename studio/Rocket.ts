import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload {
  massKg: number;
  name: string;
  totalCapacityKg: number;
  cargoItems: any[] = [];
  astronauts: any[] = [];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count = count + i;
    }
    return count;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    }
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.sumMass(this.cargoItems);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.sumMass(this.astronauts);
      return true;
    } else {
      return false;
    }
  }
}
