import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Persona } from '../models/persona';
import { Profile } from '../models/profile';
import { Contacto } from '../models/contacto';
import { Usuariologin } from '../models/usuariologin';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'http://localhost:3000/api/personas/consultas';
  constructor(private http: HttpClient) { 
    
  }

  enviarConsulta(contacto: Contacto): Observable<any> {
    return this.http.post(this.url, contacto)
  }
}
