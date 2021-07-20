const math = require("./math");

describe("Sumas", () => {
  it("debería sumar 3 + 3", () => {
    const n1 = 3;
    const n2 = 3;

    const resultado = math.sumar(n1, n2);

    expect(resultado).toBe(6);
  });

  it("debería sumar 3 + 3 y elevar el resultado al cuadrado", () => {
    const n1 = 3;
    const n2 = 3;

    const resultado = math.sumarYElevar(n1, n2);
    expect(resultado).toBe(36);
  });
});

describe("Division", () => {
  it("debería dividir 8 por 2", () => {
    const n1 = 8;
    const n2 = 2;

    const resultado = math.dividir(n1, n2);
    expect(resultado).toBe(4);
  });

  it("debería lanzar un error cuando divida por 0", () => {
    const n1 = 10;
    const n2 = 0;

    const resultado = () => math.dividir(n1, n2);
    expect(resultado).toThrow(TypeError);
  });
});

describe("Resta", () => {
  it('debería retornar "+" cuando el valor restado sea positivo', () => {
    const n1 = 8;
    const n2 = 4;

    const resultado = math.obtenerSigno(n1, n2);

    expect(resultado).toBe("+");
  });

  it('debería retornar "-" cuando el valor restado sea negativo', () => {
    const n1 = 4;
    const n2 = 8;

    const resultado = math.obtenerSigno(n1, n2);

    expect(resultado).toBe("-");
  });

  it('debería retornar "0" cuando el valor restado sea 0', () => {
    const n1 = 4;
    const n2 = 4;

    const resultado = math.obtenerSigno(n1, n2);

    expect(resultado).toBe(0);
  });
});
