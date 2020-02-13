import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInventario } from './IIinventario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiURL = this.baseUrl + "api/Inventarios"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getInventarios(): Observable<IInventario[]> {
    return this.http.get<IInventario[]>(this.apiURL);
  }

  getInventario(InventarioId: string): Observable<IInventario> {
    return this.http.get<IInventario>(this.apiURL + "/" + InventarioId);
  }

  postInventario(Inventario: IInventario): Observable<IInventario> {
    return this.http.post<IInventario>(this.apiURL, Inventario);
  }

  putInventario(Inventario: IInventario): Observable<IInventario> {
    debugger;
    return this.http.put<IInventario>(this.apiURL + "/" + Inventario.id.toString(), Inventario);
  }

  delInventario(InventarioId: string): Observable<IInventario> {
    return this.http.delete<IInventario>(this.apiURL + "/" + InventarioId);
  }

}
