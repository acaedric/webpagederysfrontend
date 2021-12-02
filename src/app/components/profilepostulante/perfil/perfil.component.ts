import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Profile } from 'src/app/models/profile';
import { PersonaService } from 'src/app/services/persona.service';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  titulo = 'Profile de usuario';
  nombre = 'Nombre del usuario';
  nombre_usuario: string | null | undefined;
  listPersonas: Persona[] = [];
  profile!: Profile ;
  fechanac = '';
  
  constructor( private aRouter: ActivatedRoute, private _personaService: PersonaService) { 
    const d = new Date(0)
      this.profile = {
        link_linkedin: '',
        lugar_residencia: '',
        antecedentes_penales: '',
        curriculum_vitae: '',
        situacion_laboral_actual: '',
        tipo_contrato_deseado: '',
        movilidad: '',
        doc_id_postulante: '',
        doc_id_empleador: '',
        apellidos:'', 
        nombre_pila:'', 
        foto:'', 
        fec_nac: d,
        sexo: '', 
        direcc_email: '',
        nombre_usuario: '',
        password: '',
        rol: '',
        pais: '',
        ciudad: ''
      }
  }
  

  ngOnInit(): void {
    this._personaService.disparadorDePostulante.subscribe(data => {
      this.nombre_usuario = data.data;
      console.log('Recibiendo data...', this.nombre_usuario);
      this.userprofile();
      
    }); 
  }

 

  userprofile() {
      if(this.nombre_usuario != null) {
        this.titulo = 'Profile de ' + this.nombre_usuario;
        this._personaService.profile(this.nombre_usuario).subscribe(data => {
          this.profile = data;
          var d = new Date(this.profile.fec_nac);
          this.getFecha(d);
        }, error => {
          console.log(error);
        })
      }

  }

  getFecha(fecha: Date){
    let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    this.fechanac = (`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${
      fecha.getFullYear()}`); 
    
  }
  
 
}
