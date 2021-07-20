const math = {
  sumar(n1, n2) {
    return n1 + n2;
  },
  sumarYElevar(n1, n2) {
    return Math.pow(this.sumar(n1, n2), 2);
  },
  dividir(n1, n2) {
    if (n2 === 0) {
      throw new TypeError("No se puede dividir por 0");
    }

    return n1 / n2;
  },
  obtenerSigno(n1, n2) {
    const resultado = n1 - n2;

    if (resultado === 0) {
      return 0;
    } else if (resultado > 0) {
      return "+";
    } else {
      return "-";
    }
  },
};

module.exports = math;
