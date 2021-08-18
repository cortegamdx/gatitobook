import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode'
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // toda vez que um servico faz subscribe nele, ele envia o ultimo dado gravado nele
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService:TokenService) {
    if(this.tokenService.possuiToken()){
      //se ja existir um token, notificar todo mundo
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    //Todo mundo que se inscreveu nesse servico recebe o usuario
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    //retornamos dessa forma para elementos de fora da classe n manipular o valor do subject
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token:string){
    this.tokenService.salvaToken(token);
    //Toda vez que gerar o token novo ele vai enviar pra todo mundo
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    //Notificar todo mundo que o token n existe mais
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
