// laptop.ts

import Computer from './computers';

class LaptopComputer implements Computer {
  assemble(): void {
    console.log("Assembling a laptop computer...");
  }
}

export default LaptopComputer;
