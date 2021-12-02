import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent implements OnInit {
  listConvocatorias: Convocatoria[] = [];
  nombre_usuario: string | null | undefined;
  constructor( private aRouter: ActivatedRoute, private _personaService: PersonaService, private _convocatoriaService: ConvocatoriaService) { }

  ngOnInit(): void {
    this._personaService.disparadorDePostulante.subscribe(data => {
      this.nombre_usuario = data.data;
      console.log('Recibiendo data nombre de usuario es...', this.nombre_usuario);
    }); 
    this.obtenerConvocatorias();
  }

  obtenerConvocatorias(){
    this._convocatoriaService.getConvocatorias().subscribe(data => {
      console.log(data);
      this.listConvocatorias = data;
    }, error => {
      console.log(error);
    })
  }
}
