import saludar from "./saludador.js";

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("andres","masculino", 14,"en")).toEqual("Good morning, Mr. andres!");
    expect(saludar("ximena","femenino", 44,"es")).toEqual("Buenos días, señora ximena!");
    expect(saludar("franz","masculino", 78,"en")).toEqual("Good morning, Mr. franz!");
  });
});
/*describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("ximena","femenino", 44,"es")).toEqual("Buenos días, señora ximena!");
  });
});

describe("saludador", () => {
  it("deberia saludar", () => {
    expect(saludar("franz","masculino", 78,"en")).toEqual("Good morning, Mr. franz!");
  });
});*/
