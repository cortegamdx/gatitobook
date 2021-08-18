import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token:string){
    localStorage.setItem(KEY,token);
  }

  excluiToken(){
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    // `!!` retorna um boolean do metodo;
    return !!this.retornaToken();
  }
}
