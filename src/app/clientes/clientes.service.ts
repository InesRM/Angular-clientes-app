import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.clientes = [];
    this.grupos = [
      { id: 0, nombre: 'Sin definir' },
      { id: 1, nombre: 'Activos' },
      { id: 2, nombre: 'Inactivos' },
      { id: 3, nombre: 'Deudores' },
    ];
  }
  getGrupos() {
    return this.grupos;
  }
  getCliente(id: number) {
    return this.clientes[id];
  }
  getClientes() {
    return this.clientes;
  }
  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }
  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0,
    };
  }
}
// las dos propiedades del servicio contienen los datos que va
// a mantener las hemos definido como privadas para aislarlas y usar los métodos
// es más seguro que acceder directamente a las propiedades

// los datos del constructor se construyen con un literal aunque lo normal
// es traerlos de algún servicio REST o base de datos o fichero

// Para agregar el cliente se usa un simple push al array de clientes
// de un cliente recibido por parámetro
// crear un nuevo cliente es simplemente devolver un nuevo objeto
// con los valores por defecto
// está tipado aunque es opcional
