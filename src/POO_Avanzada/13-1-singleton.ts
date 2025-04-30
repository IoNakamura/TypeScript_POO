// Evitamos crear multiples instancias de un objeto

export class MyService {

  static instance: MyService | null = null; // Instancia única de la clase

  private constructor(public name: string){

  }

  getName() {
    return this.name;
  }

  static getInstance(name: string) {
    if (!MyService.instance) {
      console.log("Creating instance...");
      MyService.instance = new MyService(name);
    } else {
      console.log("Returning existing instance...");
    }
    return MyService.instance;
  }
}

//const MyService1 = new MyService("Christian");
//console.log(MyService1.getName());
//const MyService2 = new MyService("Camilo");
//console.log(MyService2.getName());

//console.log(MyService1 === MyService2); // false, ya que son instancias diferentes

const MyService1 = MyService.getInstance("Christian");
console.log(MyService1.getName());
const MyService2 = MyService.getInstance("Camilo");
console.log(MyService2.getName());
const MyService3 = MyService.getInstance("Guzman");
console.log(MyService3.getName());
const MyService4 = MyService.getInstance("Zapata");
console.log(MyService4.getName());

console.log(MyService1 === MyService4); // true, ya que son la misma instancia
