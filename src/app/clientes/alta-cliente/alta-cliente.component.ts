import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../cliente.model';
@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})

export class AltaClienteComponent implements OnInit {
  cliente!: Cliente;
  grupos: Grupo[] = [];
  constructor(private clientesService: ClientesService) { }
  // el constructor recibe el servicio como parámetro
  ngOnInit() {
    this.grupos = this.clientesService.getGrupos();
    this.cliente = this.clientesService.nuevoCliente();
  }
  nuevoCliente():void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
}
}
