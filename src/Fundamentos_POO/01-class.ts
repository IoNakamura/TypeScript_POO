/**
 * Ejemplo de uso de la clase Date nativa de JavaScript
 * Muestra diferentes formas de crear y manipular fechas
 */
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

/**
 * Creación de una fecha específica
 * Los meses en JavaScript van de 0 a 11 (0 = enero, 11 = diciembre)
 */
const date2 = new Date(1995, 0, 5); // 0 enero y 11 diciembre
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

/**
 * Clase personalizada para manejar fechas
 * Esta es una implementación básica que almacena año, mes y día
 */
export class MyDate {
  year: number;
  month: number;
  day: number;

  /**
   * Constructor de la clase MyDate
   * @param year - Año de la fecha
   * @param month - Mes de la fecha (1-12)
   * @param day - Día del mes
   *
   * El keyword 'this' se refiere a la instancia actual de la clase.
   * Cuando se crea un nuevo objeto con 'new MyDate()', 'this' apunta
   * a ese nuevo objeto, permitiendo asignar valores a sus propiedades.
   */
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// Creación de una instancia de MyDate
const myDate = new MyDate(2025, 5, 10);
console.log(myDate);

