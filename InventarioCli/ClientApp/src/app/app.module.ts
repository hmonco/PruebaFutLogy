import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { EmpresaService } from './Empresa/empresa.service';
import { AreaService } from './Area/area.service';
import { PersonaService } from './Persona/persona.service';
import { TipoInventarioService } from './TipoInventario/tipo-inventario.service';
import { PropietarioInventarioService } from './PropietarioInventario/propietario-inventario.service';

import { InventarioService } from './Inventario/inventario.service';
import { ListaEmpresasComponent } from './Empresa/lista-empresas/lista-empresas.component';
import { NuevaEmpresaComponent } from './Empresa/nueva-empresa/nueva-empresa.component';
import { ListaAreasComponent } from './Area/lista-areas/lista-areas.component';
import { NuevaAreaComponent } from './Area/nueva-area/nueva-area.component';
import { ListaPersonasComponent } from './Persona/lista-personas/lista-personas.component';
import { NuevaPersonaComponent } from './Persona/nueva-persona/nueva-persona.component';
import { ListaTiposInventarioComponent } from './TipoInventario/lista-tipos-inventario/lista-tipos-inventario.component';
import { NuevoTipoInventarioComponent } from './TipoInventario/nuevo-tipo-inventario/nuevo-tipo-inventario.component';
import { ListaPropietarioInventariosComponent } from './PropietarioInventario/lista-propietario-inventarios/lista-propietario-inventarios.component';
import { NuevoPropietarioInventarioComponent } from './PropietarioInventario/nuevo-propietario-inventario/nuevo-propietario-inventario.component';
import { ListaInventariosComponent } from './Inventario/lista-inventarios/lista-inventarios.component';
import { NuevoInventarioComponent } from './Inventario/nuevo-inventario/nuevo-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListaEmpresasComponent,
    NuevaEmpresaComponent,
    ListaAreasComponent,
    NuevaAreaComponent,
    ListaPersonasComponent,
    NuevaPersonaComponent,
    ListaTiposInventarioComponent,
    NuevoTipoInventarioComponent,
    ListaPropietarioInventariosComponent,
    NuevoPropietarioInventarioComponent,
    ListaInventariosComponent,
    NuevoInventarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'ListaEmpresas', component: ListaEmpresasComponent },
      { path: 'NuevaEmpresa', component: NuevaEmpresaComponent },
      { path: 'EditarEmpresa/:id', component: NuevaEmpresaComponent },
      { path: 'ListaAreas', component: ListaAreasComponent },
      { path: 'NuevaArea', component: NuevaAreaComponent},
      { path: 'EditarArea/:id', component: NuevaAreaComponent },
      { path: 'ListaPersonas', component: ListaPersonasComponent },
      { path: 'NuevaPersona', component: NuevaPersonaComponent },
      { path: 'EditarPersona/:id', component: NuevaPersonaComponent },
      { path: 'ListaTiposInventario', component: ListaTiposInventarioComponent },
      { path: 'NuevaTipoInventario', component: NuevoTipoInventarioComponent },
      { path: 'EditarTipoInventario/:id', component: NuevoTipoInventarioComponent },
      { path: 'ListaPropietarioInventarios', component: ListaPropietarioInventariosComponent },
      { path: 'NuevaPropietarioInventario', component: NuevoPropietarioInventarioComponent },
      { path: 'EditarPropietarioInventario/:id', component: NuevoPropietarioInventarioComponent },
      { path: 'ListaInventarios', component: ListaInventariosComponent },
      { path: 'NuevaInventario', component: NuevoInventarioComponent },
      { path: 'EditarInventario/:id', component: NuevoInventarioComponent },
    ])
  ],
  providers: [EmpresaService, AreaService, PersonaService, TipoInventarioService,
              PropietarioInventarioService, InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
