import { AuthenticacaoService } from './../../autenticacao/authenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario ="";
  senha = "";

  constructor(private authService:AuthenticacaoService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario,this.senha)
    .subscribe(()=>{
      this.router.navigate(['animais']);
    },err =>{
      alert("Usuario/Senha invalida")
    })
  }

}
