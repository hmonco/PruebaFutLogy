import { Component, OnInit } from '@angular/core';
import { IEmpresa } from '../IEmpresa';
import { Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  public Empresas: IEmpresa[];

  constructor(private router: Router, private EmpresaService: EmpresaService) { }

  ngOnInit() {
    this.CargarData();
  }

  BorrarEmpresa(empresa: IEmpresa) {
    this.EmpresaService.delEmpresa(empresa.id.toString())
      .subscribe(empresa => this.CargarData(),
        error => console.error(error));
  }

  CargarData() {
    this.EmpresaService.getEmpresas()
      .subscribe(EmpresasFromAPI => this.Empresas = EmpresasFromAPI,
        error => console.error(error));
  }

}
