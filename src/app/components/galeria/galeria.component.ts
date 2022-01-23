import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  filtroSelecionado!: string;

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem('filtro-galeria')) {
      localStorage.setItem('filtro-galeria', "all")
    }
  }

  filter(item: string) {
    this.filtroSelecionado = item;
    localStorage.setItem('filtro-galeria', item);
    console.log(this.filtroSelecionado);
    
  }

}
