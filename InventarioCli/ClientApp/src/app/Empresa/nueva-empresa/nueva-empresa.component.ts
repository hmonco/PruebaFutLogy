import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmpresa } from '../IEmpresa';


@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private EmpresaService: EmpresaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  enEdicion: boolean = false;
  empresaId: number;
  formGroup: FormGroup;

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: 0,
      nombre: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.enEdicion = true;
      this.empresaId = params["id"];

      this.EmpresaService.getEmpresa(this.empresaId.toString())
        .subscribe(empresa => this.LlenarForm(empresa),
          error => console.error(error));

    });

  }

  LlenarForm(empresa: IEmpresa) {
    this.formGroup.patchValue({
      id: empresa.id,
      nombre: empresa.nombre
    })
  }

  Guardar() {
    let Empresa: IEmpresa = Object.assign({}, this.formGroup.value);

    if (this.enEdicion) {

      Empresa.id = this.empresaId;

      this.EmpresaService.putEmpresa(Empresa)
        .subscribe(empresa => this.onGuardarOk(),
          error => console.error(error));

    } else {

      this.EmpresaService.postEmpresa(Empresa)
        .subscribe(empresa => this.onGuardarOk(),
          error => console.error(error));

    }

  }

  onGuardarOk() {
    this.router.navigate(['/ListaEmpresas'])
  }

}
