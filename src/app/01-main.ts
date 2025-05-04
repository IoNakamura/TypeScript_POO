/**
 * Función asíncrona que obtiene una lista de productos desde una API externa.
 * 
 * @returns {Promise<Product[]>} Una promesa que resuelve con un arreglo de productos tipados como `Product`.
 * 
 * @remarks
 * - La función utiliza la librería `axios` para realizar una solicitud HTTP GET a la API.
 * - Los datos obtenidos se tipan directamente como `Product[]` para garantizar la consistencia del tipo.
 * - Se utiliza la desestructuración para extraer la propiedad `data` de la respuesta de la API.
 * - La función también incluye un ejemplo comentado de cómo forzar el tipado de los datos obtenidos.
 * 
 * @example
 * ```typescript
 * const products = await getProductsAsync();
 * console.log(products.map(item => `${item.id} - ${item.title}`));
 * ```
 */
import axios from 'axios';
import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {
  async function getProductsAsync() {
  //async function getProductsAsync(): Promise<Product[]> {
    //const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    //const data = rta.data;
    //return rta.data;
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //code
    data.map(item => item.category)

      //tambien podemos forzar el tipado de la libreria de la siguiente manera:
      //const rta2 = await axios.get('https://api.escuelajs.co/api/v1/products');
      //const data2 = rta2.data as Product[];

    return data;
  }

  console.log('---'.repeat(10));
  const products = await getProductsAsync();
  console.log(products.map(item => `${item.id} - ${item.title}`))
})();
