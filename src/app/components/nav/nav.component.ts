import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 

  

  /**
   * Boolean de exibição do botão "voltar ao topo"
   */
  public showScrollToTop: boolean = false;

  /**
   * Boolean de exibição do menu de configurações
   */
  public showConfiguration: boolean = false;

  /**
   * Output de página
   */
  @Output() pageEmitter = new EventEmitter<string>();

  /**
   * Método construtor do componente
   */
  constructor(
    private themeService: ThemeService
  ) { 

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    window.scrollY > 50
    ? this.showScrollToTop = true
    : this.showScrollToTop = false;
  }

  /**
   * Método inicial do componente
   */
  ngOnInit(): void {
    const theme =localStorage.getItem("theme");
    theme === null || undefined
    ? setTimeout(() => this.setTheme('light'), 500)
    : this.setTheme(theme);

    const lang =localStorage.getItem("language");
    lang === null || undefined
    ? this.setLanguage('PT')
    : this.setLanguage(lang);

    const page = localStorage.getItem('page');
    page === null || undefined
    ? this.sendPage('home')
    : this.sendPage(page);
  }

  /**
   * Emitter de valor de página
   * @param page página selecionada
   */
  sendPage(page: string) {
    this.pageEmitter.emit(page);
  }
  /**
   * Método para exibir configurações da página
   */
  toggleConfiguration() {
    this.showConfiguration = !this.showConfiguration;

    document.querySelector(".gear")?.classList.toggle('rotate');
  }

  /**
   * Método para alterar idioma da UI
   * @param value Idioma selecionado
   */
  setLanguage(lang: string): void {
    localStorage.setItem("language", lang);
  }

  /**
   * Método que define o tema no observable
   * @param tema Novo tema
   */
  setTheme(tema: string) {
    this.themeService.setTheme(tema);
  }

  /**
   * Método para voltar ao topo da página
   */
  toTop() {
    window.scrollTo(0, 0);
  }
}
