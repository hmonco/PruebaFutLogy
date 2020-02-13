import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInventario } from '../IIinventario';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-lista-inventarios',
  templateUrl: './lista-inventarios.component.html',
  styleUrls: ['./lista-inventarios.component.css']
})
export class ListaInventariosComponent implements OnInit {

  public Inventarios: IInventario[];

  constructor(private router: Router, private InventarioService: InventarioService) { }

  ngOnInit() {
    this.CargarData();
  }

  BorrarInventario(inventario: IInventario) {
    this.InventarioService.delInventario(inventario.id.toString())
      .subscribe(Inventario => this.CargarData(),
        error => console.error(error));
  }

  CargarData() {
    this.InventarioService.getInventarios()
      .subscribe(inventariosFromAPI => this.Inventarios = inventariosFromAPI,
        error => console.error(error));

    console.table(this.Inventarios);
  }

}
