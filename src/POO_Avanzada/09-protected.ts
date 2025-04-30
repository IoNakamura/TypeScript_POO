/**
 * protected:
 *  - Accesible dentro de la clase y sus subclases
 *  - No accesible fuera de la clase
 * private:
 *  - Accesible solo dentro de la clase
 *  - No accesible fuera de la clase
 * public:
 *  - Accesible desde cualquier lugar
 *
 * Actividad cambiar name ln 14 de protected a private y ver el fallo de compilacion a
 * diferencia de protected que no da error ya que Dog es una subclase de Animal
 *
 * El metodo super se usa para acceder a los metodos y propiedades de la clase padre
 */
export class Animal {
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

const animal = new Animal("Animal"); // Esto daría error ya que Animal es abstracta y eso significa que no se puede
// instanciar
// Evitamos que no se creen animales directamente desde el padre y ya la unica forma de
// crear instancias es por medio  de ya especificar un comportamiento especifico por ejemplo Dog
// animal.name = "Otro nombre"; // Esto daría error
