import saludar from "./saludador.js";

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("pepe")).toEqual("Hola pepe!");
  });
});