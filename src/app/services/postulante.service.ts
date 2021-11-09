import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulante } from '../models/postulante';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {
  url = 'http://localhost:3000/api/personas/registropostulante2/';
  constructor(private http: HttpClient) { }

  guardarPostulante(postulante: Postulante): Observable<any> {
    return this.http.post(this.url, postulante)
  }
}
