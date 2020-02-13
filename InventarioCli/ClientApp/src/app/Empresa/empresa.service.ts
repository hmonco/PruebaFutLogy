import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpresa } from './IEmpresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiURL = this.baseUrl + "api/Empresas"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getEmpresas(): Observable<IEmpresa[]> {
    return this.http.get<IEmpresa[]>(this.apiURL);
  }

  getEmpresa(empresaId: string): Observable<IEmpresa> {
    return this.http.get<IEmpresa>(this.apiURL + "/" + empresaId);
  }

  postEmpresa(empresa: IEmpresa): Observable<IEmpresa> {
    return this.http.post<IEmpresa>(this.apiURL, empresa);
  }

  putEmpresa(empresa: IEmpresa): Observable<IEmpresa> {
    debugger;
    return this.http.put<IEmpresa>(this.apiURL + "/" + empresa.id.toString(), empresa);
  }

  delEmpresa(empresaId: string): Observable<IEmpresa> {
    return this.http.delete<IEmpresa>(this.apiURL + "/" + empresaId);
  }

}
