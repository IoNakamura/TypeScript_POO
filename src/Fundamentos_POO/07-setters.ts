/**
 * Setters: son funciones que se utilizan para asignar un valor a una propiedad
 */
export class MyDate {

  constructor(
    public year: number = 1950,
    private _month: number = 11,
    private _day: number = 22
  ) { }

  /**
   * Formatea la fecha en formato dd/mm/yyyy
   * @returns {string} Fecha formateada como string
   */
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month must be between 1 and 12');
    }
  }

}

// Ejemplo de uso de la clase MyDate
const myDate = new MyDate(1995, 1, 5);
console.log(myDate.printFormat());
myDate.month = 5;
console.log('run: ', myDate.month);
myDate.month = 75;
console.log('Esto no debe aparecer: ', myDate.month);