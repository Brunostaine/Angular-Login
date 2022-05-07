import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'user' && usuario.senha === '123') {
      this.usuarioAutenticado = true;

      this.router.navigate(['/home'])
    } else {
        this.usuarioAutenticado = false;
    }
  }
}
