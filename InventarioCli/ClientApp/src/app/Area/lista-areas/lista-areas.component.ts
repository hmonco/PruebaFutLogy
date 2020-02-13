import { Component, OnInit } from '@angular/core';
import { IArea } from '../IArea';
import { Router } from '@angular/router';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-lista-areas',
  templateUrl: './lista-areas.component.html',
  styleUrls: ['./lista-areas.component.css']
})
export class ListaAreasComponent implements OnInit {

  public Areas: IArea[];

  constructor(private router: Router, private Areaservice: AreaService) { }

  ngOnInit() {
    this.CargarData();
  }

  BorrarAreas(Areas: IArea) {
    this.Areaservice.delArea(Areas.id.toString())
      .subscribe(Areas => this.CargarData(),
        error => console.error(error));
  }

  CargarData() {
    this.Areaservice.getAreas()
      .subscribe(AreasFromAPI => this.Areas = AreasFromAPI,
        error => console.error(error));
  }

}
