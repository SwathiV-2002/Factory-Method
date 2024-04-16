import Computer from './computers';

// Concrete computer class - ServerComputer
class ServerComputer implements Computer {
  assemble(): void {
    console.log("Assembling a server computer...");
  }
}

export default ServerComputer;
