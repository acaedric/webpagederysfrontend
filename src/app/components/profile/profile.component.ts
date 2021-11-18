import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Profile } from 'src/app/models/profile';
import { PersonaService } from 'src/app/services/persona.service';
import { PostulanteService } from 'src/app/services/postulante.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  titulo = 'Profile de usuario';
  nombre = 'Nombre del usuario';
  nombre_usuario: string | null;
  listPersonas: Persona[] = [];
  profile!: Profile ;

  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private aRouter: ActivatedRoute, private _personaService: PersonaService, private _postulanteService: PostulanteService) { 
    this.nombre_usuario = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    
    this.userprofile();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  userprofile() {
    if(this.nombre_usuario != null) {
      this.titulo = 'Profile de ' + this.nombre_usuario;
      this._personaService.profile(this.nombre_usuario).subscribe(data => {
        console.log(data);
        this.profile = data;
      }, error => {
        console.log(error);
      })
      /* this._productoService.obtenerpersonas(this.nombre_usuario).subscribe(data => {
        this.personaForm.se
      }) */
    }

  }
}
