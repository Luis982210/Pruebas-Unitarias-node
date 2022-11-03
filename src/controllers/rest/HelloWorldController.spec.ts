import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("aFunction should returns hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.aFunction()).toBe("hello");
  });

  it("25 + 25 debe ser 50", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const primerNumero = 25;
    const segundoNumero = 25;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(50);
  });
  it("mock de sumar dos numeros", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "_sumarDosNumeros").mockReturnValueOnce(1);
    const primerNumero = 21;
    const segundoNumero = 2;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toStrictEqual(1);
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(23);
  });

  it("200 + 125 debe ser 325", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const primerNumero = 200;
    const segundoNumero = 125;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(325);
  });

  it("0 + 5 debe ser 5", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const primerNumero = 0;
    const segundoNumero = 5;
    expect(instance._sumarDosNumeros(primerNumero, segundoNumero)).toBe(5);
  });
  
  it("llamada a metodo interno bajo circunstancias especiales", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    let x = jest.spyOn(instance, "_sumarDosNumeros");
    const primerNumero = 1;
    const segundoNumero = 2;
    const res = instance.suma(primerNumero,segundoNumero);
    expect(x).toBeCalled();
  });
});
