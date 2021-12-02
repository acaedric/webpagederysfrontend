import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Profile } from 'src/app/models/profile';
import { PostulanteService } from 'src/app/services/postulante.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilepostulanteComponent implements OnInit {
  titulo = 'Profile de usuario';
  nombre = 'Nombre del usuario';
  nombre_usuario: string | null;
  listPersonas: Persona[] = [];
  profile!: Profile ;

  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;

  

  @Input() dataEntrante: any;

  constructor(private observer: BreakpointObserver, private aRouter: ActivatedRoute, private _personaService: PersonaService, private router: Router)  { 
    this.nombre_usuario = this.aRouter.snapshot.paramMap.get('id')!;
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
    
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        this.observer.observe(['(max-width:800px)']).subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
      } catch (e) {
        console.log(e);
      }
    }, 0)
    
  }

 

  enviarPostulante(){
    this.dataEntrante = this.nombre_usuario;
    console.log('Enviando data...', this.dataEntrante);
    this._personaService.disparadorDePostulante.emit({
      data:this.dataEntrante
    })


  }
}
