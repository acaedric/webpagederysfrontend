import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  url = 'http://localhost:3000/api/convocatorias/listadeconvocatorias/';
  url2 = 'http://localhost:3000/api/convocatorias/listadeconvocatoriaspostulante/'
  url3 = 'http://localhost:3000/api/convocatorias/listadeconvocatoriastecnico/'
  constructor(private http: HttpClient) { }

  getConvocatorias(): Observable<any> {
    return this.http.get(this.url);
  }

}
