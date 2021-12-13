import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { PostulanteSeleccion } from 'src/app/models/postulanteseleccion' ;

@Component({
  selector: 'app-competenciaslaborales',
  templateUrl: './competenciaslaborales.component.html',
  styleUrls: ['./competenciaslaborales.component.css']
})
export class CompetenciaslaboralesComponent implements OnInit{
  seleccionCompetenciasLaborales: PostulanteSeleccion[] = [];
  constructor( private aRouter: ActivatedRoute, private _personaService: PersonaService) { }  
  
  ngOnInit() : void{
    var Persona1 = {
      fecha_publicac: 'Hace 2 min',
      titulo: 'Analista de Sistemas Junior',
      estado: 'Por revisar',
      nombre: 'Pedro Gutierrez',
      correo: 'pedrogut@gmail.com',
      puntaje: '---',
    }; 
    this.seleccionCompetenciasLaborales = [Persona1]; 
    console.log(this.seleccionCompetenciasLaborales)
    console.log(Persona1)   
  }
  
}
