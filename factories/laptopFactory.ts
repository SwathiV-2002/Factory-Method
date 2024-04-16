import Computer from '../computers/computers';
import LaptopComputer from '../computers/laptop';
import ComputerFactory from './computerFactory';

// Concrete factory class - LaptopComputerFactory
class LaptopComputerFactory implements ComputerFactory {
  createComputer(): Computer {
    return new LaptopComputer();
  }
}

export default LaptopComputerFactory;
