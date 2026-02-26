import saludar from "./saludador.js";

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("pepe","masculino",70)).toEqual("Hola, señor pepe!");
    expect(saludar("maria","femenino",12)).toEqual("Hola, señorita maria!");

  });
});