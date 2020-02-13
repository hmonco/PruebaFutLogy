import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITipoInventario } from './ITipoInventario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoInventarioService {

  private apiURL = this.baseUrl + "api/TiposInventario"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getTiposInventario(): Observable<ITipoInventario[]> {
    return this.http.get<ITipoInventario[]>(this.apiURL);
  }

  getTipoInventario(TipoInventarioId: string): Observable<ITipoInventario> {
    return this.http.get<ITipoInventario>(this.apiURL + "/" + TipoInventarioId);
  }

  postTipoInventario(TipoInventario: ITipoInventario): Observable<ITipoInventario> {
    return this.http.post<ITipoInventario>(this.apiURL, TipoInventario);
  }

  putTipoInventario(TipoInventario: ITipoInventario): Observable<ITipoInventario> {
    debugger;
    return this.http.put<ITipoInventario>(this.apiURL + "/" + TipoInventario.id.toString(), TipoInventario);
  }

  delTipoInventario(TipoInventarioId: string): Observable<ITipoInventario> {
    return this.http.delete<ITipoInventario>(this.apiURL + "/" + TipoInventarioId);
  }

}
