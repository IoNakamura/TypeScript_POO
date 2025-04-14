export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
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
      console.log("woof!");
    }
  }
}

const pupis = new Animal("Pupis");
pupis.move();
console.log(pupis.greeting());

const kira = new Dog("Kira", "Camilo");
kira.move();
console.log(kira.greeting());
kira.woof(5);
console.log(kira.owner);
