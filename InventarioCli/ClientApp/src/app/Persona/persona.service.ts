import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPersona } from './IPersona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiURL = this.baseUrl + "api/Personas"

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPersonas(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(this.apiURL);
  }

  getPersona(PersonaId: string): Observable<IPersona> {
    return this.http.get<IPersona>(this.apiURL + "/" + PersonaId);
  }

  postPersona(Persona: IPersona): Observable<IPersona> {
    return this.http.post<IPersona>(this.apiURL, Persona);
  }

  putPersona(Persona: IPersona): Observable<IPersona> {
    debugger;
    return this.http.put<IPersona>(this.apiURL + "/" + Persona.id.toString(), Persona);
  }

  delPersona(PersonaId: string): Observable<IPersona> {
    return this.http.delete<IPersona>(this.apiURL + "/" + PersonaId);
  }

}
