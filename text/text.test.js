const text = require("./text");

it("debería revertir las letras de un texto", () => {
  const texto = "El perro está ladrando";
  const expected = "odnardal átse orrep lE";

  const resultado = text.revertirTexto(texto);

  expect(resultado).toBe(expected);
});

it("debería revertir las palabras de un texto", () => {
  const texto = "El perro está ladrando";
  const expected = "ladrando está perro El";

  const resultado = text.revertirPalabras(texto);

  expect(resultado).toBe(expected);
});

it('debería retornar "true" si el texto es palíndromo', () => {
  const texto = "reconocer";
  const resultado = text.esPalindromo(texto);
  expect(resultado).toBeTruthy();
});

it('debería retornar "false" si el texto NO es palíndromo', () => {
  const texto = "arbol";
  const resultado = text.esPalindromo(texto);
  expect(resultado).toBeFalsy();
});

it("debería capitalizar y normalizar el texto", () => {
  const texto = "cArOLInA GoMEZ rODriguEZ";
  const expected = "Carolina Gomez Rodriguez";

  const resultado = text.procesarNombre(texto);

  expect(resultado).toBe(expected);
});

it("debería saludar a los pacientes", () => {
  const mockPacientes = [
    {
      id: 1,
      name: "lUcÍa",
      age: 55,
    },
    {
      id: 2,
      name: "cArLItOS",
      age: 22,
    },
  ];

  const resultado = text.saludarPacientes(mockPacientes);
  const expected = "Hola, Lucía. Hola, Carlitos.";

  expect(resultado).toBe(expected);
});

// Compara objeto profundamente con .toEqual
it("debería ser el mismo objeto", () => {
  const mockObjeto = { name: "Carlitos", children: { id: 1 } };

  expect(mockObjeto).toEqual({ name: "Carlitos", children: { id: 1 } });
});

// Negar matcher con .not y compara arreglo con .toEqual
it("debería ser un arreglo diferente", () => {
  const mockArray = [1, 2, 3, 4];

  expect(mockArray).not.toEqual([1, 2, 3]);
});
