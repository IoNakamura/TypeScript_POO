/**
 * Clase que representa una fecha con funcionalidades básicas de manipulación
 * @class MyDate
 */
export class MyDate {
  /** Año de la fecha */
  year: number;
  /** Mes de la fecha */
  month: number;
  /** Día de la fecha */
  day: number;

  /**
   * Constructor de la clase MyDate
   * @param {number} year - Año de la fecha
   * @param {number} month - Mes de la fecha
   * @param {number} day - Día de la fecha
   */
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  /**
   * Formatea la fecha en formato dd/mm/yyyy
   * @returns {string} Fecha formateada como string
   */
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  /**
   * Añade una cantidad específica a la fecha según el tipo especificado
   * @param {number} amount - Cantidad a añadir
   * @param {'days' | 'months' | 'years'} type - Tipo de unidad a modificar es un literal type
   */
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

// Ejemplo de uso de la clase MyDate
const myDate = new MyDate(2000, 1, 1);
console.log(myDate.printFormat()); // Imprime: 1/1/2000
myDate.add(3, 'days');
console.log(myDate.printFormat()); // Imprime: 4/1/2000
myDate.add(3, 'months');
console.log(myDate.printFormat()); // Imprime: 4/4/2000
myDate.add(3, 'years');
console.log(myDate.printFormat()); // Imprime: 4/4/2003
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);

// Crear una funcion para extraer un numero en un texto de letras
function sacarNumero(texto: string) {
  const numero = texto.match(/\d+/);
  return numero ? parseInt(numero[0]) : 0;
}

console.log(sacarNumero('asdflkjñasflñkjkj3waekfjaslkfjkjasiwoeurpoi'));

