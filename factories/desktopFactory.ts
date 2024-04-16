import Computer from '../computers/computers';
import DesktopComputer from '../computers/desktop';
import ComputerFactory from './computerFactory';

// Concrete factory class - DesktopComputerFactory
class DesktopComputerFactory implements ComputerFactory {
  createComputer(): Computer {
    return new DesktopComputer();
  }
}

export default DesktopComputerFactory;
