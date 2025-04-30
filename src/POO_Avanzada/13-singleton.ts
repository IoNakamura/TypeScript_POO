// Patron Singleton, uno de los patrones más utilizados en la programación orientada a objetos.
// Se utiliza para garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a ella.
// Se utiliza para evitar la creación de múltiples instancias de una clase que debería tener solo una instancia en toda la aplicación.
// Por ejemplo, una clase de configuración, un gestor de base de datos o un gestor de eventos.
// En TypeScript, se puede implementar un singleton utilizando un constructor privado y un método estático para acceder
// a la instancia única de la clase.

// En este ejemplo, la clase DatabaseManager es un singleton que se encarga de gestionar la conexión a una base de datos.
// La clase tiene un constructor privado para evitar que se creen instancias de la clase desde fuera de ella.

// La instancia única de la clase se almacena en una propiedad estática llamada instance.
// El método estático getInstance() se utiliza para acceder a la instancia única de la clase. Si la instancia no existe, se crea una nueva instancia y se almacena en la propiedad estática instance. Si ya existe una instancia, se devuelve la instancia existente.
// Esto garantiza que solo haya una única instancia de la clase DatabaseManager en toda la aplicación.

class DatabaseManager {
  private static instance: DatabaseManager | null = null;
  private connection: string;

  private constructor() {
    this.connection = "Database connection established";
  }

  public static getInstance(): DatabaseManager {
    if (this.instance === null) {
      this.instance = new DatabaseManager();
    }
    return this.instance;
  }

  public getConnection(): string {
    return this.connection;
  }
    }

