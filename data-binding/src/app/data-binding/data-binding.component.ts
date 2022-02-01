import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/seed/picsum/400/200';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  nome: string = 'adc';

  pessoa: any = {
    nome: 'Jaqueline',
    idade: 24
  }

  getValor() {
    return 1;
  }

  getCurtitCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  /*onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }*/

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.nome = (<HTMLInputElement>evento.target).value;
  }

  //$event.target.value
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  //([ngmodel])
  setValueName(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
