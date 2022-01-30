import { Component, Input, OnInit } from '@angular/core';

import { Projeto } from 'src/app/interfaces/projeto.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  filtroSelecionado!: string;

  /**
   * Tema do componente
   */
  @Input() theme = '';

  /**
   * Flag de visualização de imagem individual
   */
  viewDisplay = false;

  /**
   * Projeto selecionado para visualização
   */
  public projetoSelecionado!: Projeto | null;

  /**
   * Lista de projetos 
   */
  projectsList: Projeto[] = [];

  /**
   * Lista de projetos visíveis no compónente
   */
  visibleProjectsList: Projeto[] = [

    {
      titulo: 'Sketchbook Baleia',
      descricao: 'TO PROCURANDO NEEEEEEEMO',
      criado: '',
      imagens: [],
      thumbnail: '../../../assets/projects/gallery/whale_sketch.png',
      categoria: '',

    },
    {
      titulo: 'Sketchbook diário',
      descricao: 'bonitinho pa pêga',
      criado: '',
      imagens: [],
      thumbnail: '../../../assets/projects/gallery/diario_sketch.png',
      categoria: '',

    },
    {
      titulo: 'Sketchbook Crânio',
      descricao: 'ficou top',
      criado: '',
      imagens: [],
      thumbnail: '../../../assets/projects/gallery/skull_sketch.png',
      categoria: '',

    },
  ];

  /**
   * Método construtor
   * @param themeService Instância do themeService
   */
  constructor() { }
  
  /**
   * Método inicial do componente
   */
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

  toggleDisplay(projeto?: Projeto) {
    this.viewDisplay = !this.viewDisplay;
    projeto 
    ? this.projetoSelecionado = projeto
    : this.projetoSelecionado = null
    console.log(this.projetoSelecionado);
  }

}
