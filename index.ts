import ComputerFactory from './factories/computerFactory';
import DesktopComputerFactory from './factories/desktopFactory';
import LaptopComputerFactory from './factories/laptopFactory';
import ServerComputerFactory from './factories/serverFactory';
import Computer from './computers/computers';

// Usage
const desktopFactory: ComputerFactory = new DesktopComputerFactory();
const laptopFactory: ComputerFactory = new LaptopComputerFactory();
const serverFactory: ComputerFactory = new ServerComputerFactory();

const desktopComputer: Computer = desktopFactory.createComputer();
const laptopComputer: Computer = laptopFactory.createComputer();
const serverComputer: Computer = serverFactory.createComputer();

desktopComputer.assemble(); // Output: Assembling a desktop computer...
laptopComputer.assemble();  // Output: Assembling a laptop computer...
serverComputer.assemble();  // Output: Assembling a server computer...
