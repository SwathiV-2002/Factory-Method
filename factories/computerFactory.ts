import Computer from '../computers/computers';

// ComputerFactory interface
interface ComputerFactory {
  createComputer(): Computer;
}

export default ComputerFactory;
