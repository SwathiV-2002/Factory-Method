import Computer from './computers';
class DesktopComputer implements Computer {
  assemble(): void {
    console.log("Assembling a desktop computer...");
  }
}

export default DesktopComputer;
