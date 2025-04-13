/**
 * en Typescript por defecto los atributos de una clase son publicos
 * para que sean privados se debe usar el modificador private
 */
export class MyDate {
  year: number;
  month: number;
  private day: number; //Dejandolo asi, solo permite acceder a el desde la clase

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
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
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

  getDay() {
    return this.day;
  }
}

// Ejemplo de uso de la clase MyDate
const myDate = new MyDate(1995, 1, 5);
//console.log(myDate.);
//myDate.day = 12;
//console.log(myDate.day);

console.log(myDate.printFormat());
// myDate.addPadding(12);
// console.log(myDate.printFormat());

console.log(myDate.getDay());
