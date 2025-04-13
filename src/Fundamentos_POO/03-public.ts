/**
 * en Typescript por defecto los atributos de una clase son publicos
 */
export class MyDate {
  public year: number;
  public month: number;
  readonly day: number; //Dejandolo asi, lo protejemos de modificaciones
  
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  /**
   * Formatea la fecha en formato dd/mm/yyyy
   * @returns {string} Fecha formateada como string
   */
  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  /**
   * Añade una cantidad específica a la fecha según el tipo especificado
   * @param {number} amount - Cantidad a añadir
   * @param {'days' | 'months' | 'years'} type - Tipo de unidad a modificar es un literal type
   */
  public add(amount: number, type: 'days' | 'months' | 'years') {
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
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
