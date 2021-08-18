import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  //esse input cria um atributo na tag do component
  @Input()
  mensagem:string ="Mensagem de erro.";

   constructor() { }

  ngOnInit(): void {
  }

}
