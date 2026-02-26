import sumador from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumador(3, 2)).toEqual(5);
  });

  it("deberia restar dos numeros", ()=>{
    expect(sumador(5,1).toEqual(4));
  });
  
  it("deberia multiplicar dos numeros", ()=>{
    expect(sumador(5,1).toEqual(5));
  });
  
  it("deberia dividir dos numeros", ()=>{
    expect(sumador(6,2).toEqual(3));
  });
});