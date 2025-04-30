/**
 * Interfaz que define la estructura y comportamiento que debe tener un driver de base de datos
 */
export interface Driver {
  database: string;    // Nombre de la base de datos
  password: string;    // Contraseña para la conexión
  port: number;        // Puerto de conexión

  conect(): void;      // Método para establecer conexión
  disconnect(): void;  // Método para cerrar conexión
  isConnected(name: string): boolean; // Método para verificar estado de conexión
}

/**
 * Implementación de un driver de base de datos usando un objeto literal
 */
const driver: Driver = {
  database: "postgres",
  password: "123456",
  port: 5432,

  conect() {
    console.log("Conectado a la base de datos");
  },

  disconnect() {
    console.log("Desconectado de la base de datos");
  },

  isConnected(name: string) {
    return true;
  },
};

/**
 * Clase que implementa un driver específico para PostgreSQL
 * Implementa la interfaz Driver
 */
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private variableAleatoria: string  // Variable privada específica de PostgreSQL
  ) {}

  conect() {
    console.log("Conectado a la base de datos");
  }

  disconnect() {
    console.log("Desconectado de la base de datos");
  }

  isConnected(name: string) {
    return true;
  }
}

/**
 * Clase que implementa un driver específico para MySQL
 * Implementa la interfaz Driver
 */
class MySQLDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  conect() {
    console.log("Conectado a la base de datos");
  }

  disconnect() {
    console.log("Desconectado de la base de datos");
  }

  isConnected(name: string) {
    return true;
  }
}

