import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Título da aplicação
   */
  public title = 'andressa-ilustra';

  /**
   * Página selecionada a ser exibida
   */
  public page = 'home';

  constructor () {}

  /**
   * Método inicial do componente
   */
  ngOnInit(): void {
  }

  /**
   *  Método de definição de página
   */
  setPage(page: string) {
    this.page = page;
  }
}
