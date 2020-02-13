import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArea } from './IArea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiURL = this.baseUrl + "api/Areas"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAreas(): Observable<IArea[]> {
    return this.http.get<IArea[]>(this.apiURL);
  }

  getArea(AreaId: string): Observable<IArea> {
    return this.http.get<IArea>(this.apiURL + "/" + AreaId);
  }

  postArea(Area: IArea): Observable<IArea> {
    return this.http.post<IArea>(this.apiURL, Area);
  }

  putArea(Area: IArea): Observable<IArea> {
    debugger;
    return this.http.put<IArea>(this.apiURL + "/" + Area.id.toString(), Area);
  }

  delArea(AreaId: string): Observable<IArea> {
    return this.http.delete<IArea>(this.apiURL + "/" + AreaId);
  }

}
