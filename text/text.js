const taller = {
  revertirTexto(text) {
    return text.split("").reverse().join("");
  },
  revertirPalabras(text) {
    return text.split(" ").reverse().join(" ");
  },
  esPalindromo(text) {
    return this.revertirTexto(text) === text;
  },
  procesarNombre(text) {
    return text
      .split(" ")
      .map(
        (t) => `${t[0].toUpperCase()}${t.substring(1, t.length).toLowerCase()}`
      )
      .join(" ");
  },
  saludarPacientes(pacientes) {
    return (
      pacientes
        .map((paciente) => `Hola, ${this.procesarNombre(paciente.name)}`)
        .join(". ") + "."
    );
  },
};

module.exports = taller;
