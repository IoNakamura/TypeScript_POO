/**
 * static:
 *  - Se puede acceder sin instanciar la clase
 *  - Se puede acceder a los metodos y propiedades de la clase sin instanciar la clase
 * Por ejemplo Math.PI, Math.max, etc.
 */
console.log(Math.PI);
//const math = new Math();
//math.PI;

console.log(Math.max(1, 2, 3));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return Math.max(...numbers);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3));

/**
 * Ejemplo de uso de static para un contador de instancias
 * - Demuestra cómo una propiedad static es compartida por todas las instancias
 * - Útil para llevar registro de cuántos objetos se han creado
 * - El contador persiste aunque se creen/destruyan instancias
 */
class Counter {
  // Propiedad static que cuenta todas las instancias creadas
  private static instanceCount: number = 0;

  // Propiedad de instancia para identificar cada objeto
  private readonly id: number;

  constructor() {
    // Cada vez que se crea una instancia, incrementamos el contador
    Counter.instanceCount++;
    // Asignamos el valor actual del contador como ID
    this.id = Counter.instanceCount;
  }

  // Método static para obtener el total de instancias
  static getInstanceCount(): number {
    return Counter.instanceCount;
  }

  // Método de instancia para obtener el ID
  getId(): number {
    return this.id;
  }
}

// Ejemplo de uso
const counter1 = new Counter();
console.log('ID del primer contador:', counter1.getId()); // Muestra: 1
console.log('Total de instancias:', Counter.getInstanceCount()); // Muestra: 1

const counter2 = new Counter();
console.log('ID del segundo contador:', counter2.getId()); // Muestra: 2
console.log('Total de instancias:', Counter.getInstanceCount()); // Muestra: 2

