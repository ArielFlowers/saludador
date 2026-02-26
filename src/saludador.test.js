import saludar from "./saludador.js";

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("pepe","masculino")).toEqual("Hola, señor pepe!");
    expect(saludar("maria","femenino")).toEqual("Hola, señora maria!");

  });
});