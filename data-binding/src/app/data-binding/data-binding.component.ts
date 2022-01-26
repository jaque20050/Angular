import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string =  'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem ="https://picsum.photos/seed/picsum/400/200";

  getValor(){
    return 1;
  }

  getCurtitCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
