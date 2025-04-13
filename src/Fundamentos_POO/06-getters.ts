/**
 * Getters: son funciones que se utilizan para obtener el valor de una propiedad
 */
export class MyDate {

  constructor(
    public year: number = 1950,
    public month: number = 11,
    private _day: number = 22
  ) { }

  /**
   * Formatea la fecha en formato dd/mm/yyyy
   * @returns {string} Fecha formateada como string
   */
  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    if (this._day <= 31) {
      return this._day;
    }
    throw new Error('day must be less than 31');
  }

  isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }


}

// Ejemplo de uso de la clase MyDate
const myDate = new MyDate(1995, 1, 5);
console.log(myDate.printFormat());

console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 1, 5);
console.log('2000', myDate2.isLeapYear());

const myDate3 = new MyDate(2001, 1, 5);
console.log('2001', myDate3.isLeapYear());

const myDate4 = new MyDate(2004, 1, 5);
console.log('2004', myDate4.isLeapYear());

const myDate5 = new MyDate(1995, 1, 5);
console.log('1995', myDate5.isLeapYear());