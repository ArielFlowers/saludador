import {sumar,restar,multiplicar,dividir} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia restar dos numeros", ()=>{
    expect(restar(5,1)).toEqual(4);
  });
  
  it("deberia multiplicar dos numeros", ()=>{
    expect(multiplicar(5,1)).toEqual(5);
  });
  
  it("deberia dividir dos numeros", ()=>{
    expect(dividir(6,2)).toEqual(3);
  });
});