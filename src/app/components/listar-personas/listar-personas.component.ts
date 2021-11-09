import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  listPersonas: Persona[] = [];
  constructor(private _personaService: PersonaService) { }

  ngOnInit(): void {
    this.obtenerpersonas();
  }

  obtenerpersonas(){
    this._personaService.getPersonas().subscribe(data => {
      console.log(data);
      this.listPersonas = data;
    }, error => {
      console.log(error);
    })
  }
}
