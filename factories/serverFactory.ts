import Computer from '../computers/computers';
import ServerComputer from '../computers/server';
import ComputerFactory from './computerFactory';

class ServerComputerFactory implements ComputerFactory {
  createComputer(): Computer {
    return new ServerComputer();
  }
}
export default ServerComputerFactory;
