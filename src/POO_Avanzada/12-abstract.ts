//import { Animal, Dog } from "./09-protected";


/**
 * Clase abstracta que define la estructura base para animales
 * - No se puede instanciar directamente
 * - Puede contener métodos abstractos que deben ser implementados por las clases hijas
 * - Puede contener métodos concretos que heredan las clases hijas
 */
export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log("Doing something!");
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log("Moving as a dog");
    super.move();
  }
}


const kira = new Dog("Kira", "Camilo");
//kira.name = "Otro nombre";
kira.woof(2);
//kira.doSomething();
kira.move();

// IMPORANTE: Descomentarear la siguiente linea para ver el error de compilacion
// ya que Animal es una clase abstracta y no se puede instanciar directamente

//const animal = new Animal("Animal"); // Esto daría error ya que Animal es abstracta y eso significa que no se puede
// instanciar
// Evitamos que no se creen animales directamente desde el padre y ya la unica forma de
// crear instancias es por medio  de ya especificar un comportamiento especifico por ejemplo Dog
// animal.name = "Otro nombre"; // Esto daría error
