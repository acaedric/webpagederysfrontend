import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  titulo = 'Profile de usuario';
  nombre_usuario: string | null;
  constructor(private aRouter: ActivatedRoute) { 
    this.nombre_usuario = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    
    this.userprofile();
  }

  userprofile() {
    if(this.nombre_usuario != null) {
      this.titulo = 'Profile de ' + this.nombre_usuario;
      /* this._productoService.obtenerpersonas(this.nombre_usuario).subscribe(data => {
        this.personaForm.se
      }) */
    }
  }
}
