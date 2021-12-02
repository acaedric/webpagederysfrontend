import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Persona } from '../models/persona';
import { Profile } from '../models/profile';
import { Usuariologin } from '../models/usuariologin';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:3000/api/personas/listadepersonas/';
  url2 = 'http://localhost:3000/api/personas/registropostulante/';
  url3 = 'http://localhost:3000/api/personas/login';
  url4 = 'http://localhost:3000/api/personas/profile';
  @Output() disparadorDePostulante: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarPersona(persona: Persona): Observable<any> {
    return this.http.post(this.url2, persona)
  }
  
  login(usuarioypassword: Usuariologin): Observable<any> {
    return this.http.post(this.url3, usuarioypassword)
  }

  profile(id: string): Observable<any> {
    return this.http.get(`${this.url4}/${id}`)
  }


/*   findOne(id: number): Observable<Usuariologin> {
    return this.http.get(this.url4 + id).pipe(
      map((usuarioypassword:Usuariologin) => usuarioypassword)
    )
  } */
}
