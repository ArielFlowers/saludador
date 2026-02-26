import saludar from "./saludador.js";

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("pepe","masculino",70,"es")).toEqual("Buenas noches, señor pepe!");
    expect(saludar("maria","femenino",12,"en")).toEqual("Good evening, Miss. maria!");
    expect(saludar("andres","masculino", 14,"en")).toEqual("Good evening, Mr. andres!");
    expect(saludar("ximena","femenino", 44,"es")).toEqual("Buenas noches, señora ximena!");
    expect(saludar("franz","masculino", 78,"en")).toEqual("Good evening, Mr. franz!");
    expect(saludar("peter","masculino", 8,"es")).toEqual("Buenas noches, joven peter!");

  });
});