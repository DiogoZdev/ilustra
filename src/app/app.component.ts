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

  /**
   * Tema do sistema
   */
  public theme = '';

  /**
   * Método construtor do componente
   */
  constructor (
    private themeService: ThemeService,
  ) {}

  /**
   * Método inicial do componente
   */
  ngOnInit(): void {

    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme') as string;
      this.themeService.setTheme(this.theme)
    }

    setTimeout(() => {
      this.themeService.getTheme().subscribe((tema) => {
        this.theme = tema;
      });
    }, 500)
  }

  /**
   *  Método de definição de página
   */
  setPage(page: string) {
    this.page = page;
  }
}
