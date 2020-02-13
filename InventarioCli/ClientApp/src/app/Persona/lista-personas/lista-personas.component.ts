import { Component, OnInit } from '@angular/core';
import { IPersona } from '../IPersona';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  public Personas: IPersona[];

  constructor(private router: Router, private Personaservice: PersonaService) { }

  ngOnInit() {
    this.CargarData();
  }

  BorrarPersonas(Personas: IPersona) {
    this.Personaservice.delPersona(Personas.id.toString())
      .subscribe(Personas => this.CargarData(),
        error => console.error(error));
  }

  CargarData() {
    this.Personaservice.getPersonas()
      .subscribe(PersonasFromAPI => this.Personas = PersonasFromAPI,
        error => console.error(error));
  }

}
