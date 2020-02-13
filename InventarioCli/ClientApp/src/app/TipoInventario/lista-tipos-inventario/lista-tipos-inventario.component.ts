import { Component, OnInit } from '@angular/core';
import { ITipoInventario } from '../ITipoInventario';
import { Router } from '@angular/router';
import { TipoInventarioService } from '../tipo-inventario.service';

@Component({
  selector: 'app-lista-tipos-inventario',
  templateUrl: './lista-tipos-inventario.component.html',
  styleUrls: ['./lista-tipos-inventario.component.css']
})
export class ListaTiposInventarioComponent implements OnInit {

  public TiposInventario: ITipoInventario[];

  constructor(private router: Router, private TiposInventarioervice: TipoInventarioService) { }

  ngOnInit() {
    this.CargarData();
  }

  BorrarInventario(Inventario: ITipoInventario) {
    this.TiposInventarioervice.delTipoInventario(Inventario.id.toString())
      .subscribe(Inventario => this.CargarData(),
        error => console.error(error));
  }

  CargarData() {
    this.TiposInventarioervice.getTiposInventario()
      .subscribe(TiposInventarioFromAPI => this.TiposInventario = TiposInventarioFromAPI,
        error => console.error(error));
  }

}
