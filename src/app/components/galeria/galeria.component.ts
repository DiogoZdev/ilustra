import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

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
  public theme = 'light';

  /**
   * Flag de visualização de imagem individual
   */
  viewDisplay = false;

  /**
   * Lista de projetos 
   */
  projectsList: Projeto[] = [];

  visibleProjectsList: Projeto[] = [];

  /**
   * Método construtor
   * @param themeService Instância do themeService
   */
  constructor(
    private themeService: ThemeService,
  ) { }
  
  /**
   * Método inicial do componente
   */
  ngOnInit(): void {

    setTimeout(() => {
      this.themeService.getTheme().subscribe((tema) => {
        this.theme = tema;
      });
    }, 500);

    if (!localStorage.getItem('filtro-galeria')) {
      localStorage.setItem('filtro-galeria', "all")
    }
  }

  filter(item: string) {
    this.filtroSelecionado = item;
    localStorage.setItem('filtro-galeria', item);
    console.log(this.filtroSelecionado);
  }

  toggleDisplay() {
    this.viewDisplay = !this.viewDisplay;
  }

}
