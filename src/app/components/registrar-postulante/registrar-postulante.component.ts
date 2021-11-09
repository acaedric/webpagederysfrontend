import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { Postulante } from 'src/app/models/postulante';
import { PersonaService } from 'src/app/services/persona.service';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-registrar-postulante',
  templateUrl: './registrar-postulante.component.html',
  styleUrls: ['./registrar-postulante.component.css']
})
export class RegistrarPostulanteComponent implements OnInit {
  postulanteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _personaService: PersonaService, private _postulanteService: PostulanteService) { 
    this.postulanteForm = this.fb.group({
      direcc_email: ['', Validators.required],
      link_linkedin: ['', Validators.required],
      nombre_pila: ['', Validators.required],
      apellidos: ['', Validators.required],
      doc_id: ['', Validators.required],
      lugar_residencia: ['',Validators.required],
      fec_nac: ['', Validators.required],
      sexo: ['', Validators.required],
      telefonomovil: ['', Validators.required],
      telefonofijo: ['', Validators.required],
      foto: ['', Validators.required],
      curriculum_vitae: ['', Validators.required],
      situacion_laboral_actual: ['', Validators.required],
      tipo_contrato_deseado: ['', Validators.required],
      movilidad: ['', Validators.required],
      posicion_digital: ['', Validators.required],
      tiempo_posicion_digital: ['', Validators.required],
      experiencia_laboral: ['', Validators.required],
      tiempo_experiencia_laboral: ['', Validators.required],
      nombre_usuario: ['', Validators.required],
      password: ['', Validators.required],
      confirmarpassword: ['', Validators.required],
    })
  }


  
  ngOnInit(): void {
  }

  agregarPostulante(){
    console.log(this.postulanteForm);
   
    const PERSONA: Persona = {
        doc_id: this.postulanteForm.get('doc_id')?.value,
        apellidos: this.postulanteForm.get('apellidos')?.value, 
        nombre_pila: this.postulanteForm.get('nombre_pila')?.value, 
        foto: this.postulanteForm.get('foto')?.value, 
        fec_nac: this.postulanteForm.get('fec_nac')?.value,
        sexo: this.postulanteForm.get('sexo')?.value, 
        direcc_email: this.postulanteForm.get('direcc_email')?.value,
        nombre_usuario: this.postulanteForm.get('nombre_usuario')?.value,
        password: this.postulanteForm.get('password')?.value,
        rol: 'postulante',
        pais: this.postulanteForm.get('lugar_residencia')?.value,
        ciudad: this.postulanteForm.get('lugar_residencia')?.value
    }

    console.log(PERSONA);

    const POSTULANTE: Postulante = {
      link_linkedin: this.postulanteForm.get('link_linkedin')?.value,
      lugar_residencia: this.postulanteForm.get('lugar_residencia')?.value,
      antecedentes_penales: this.postulanteForm.get('antecedentes_penales')?.value,
      curriculum_vitae: this.postulanteForm.get('curriculum_vitae')?.value,
      situacion_laboral_actual: this.postulanteForm.get('situacion_laboral_actual')?.value,
      tipo_contrato_deseado: this.postulanteForm.get('tipo_contrato_deseado')?.value,
      movilidad: this.postulanteForm.get('movilidad')?.value,
      doc_id: this.postulanteForm.get('doc_id')?.value,
      doc_id_empleador: ''
    }
    console.log(POSTULANTE);

    this._personaService.guardarPersona(PERSONA).subscribe(data =>{
    }, error => {
      console.log(error);
    });
    this._postulanteService.guardarPostulante(POSTULANTE).subscribe(data =>{
    }, error => {
      console.log(error);
    });
    
    this.postulanteForm.reset()
    this.toastr.success('La persona ha sido registrado con éxito', 'Registrado correctamente!');
    this.router.navigate(['/']);
  }

}
