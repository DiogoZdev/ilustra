import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  constructor() { 

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
    const theme = localStorage.getItem("dark");
    if (theme) this.setDarkTheme();

    const lang =localStorage.getItem("language");
    lang === null || undefined
    ? this.setLanguage('PT')
    : this.setLanguage(lang);
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
  setDarkTheme() {
    localStorage.setItem("dark", "true");
    document.body.classList.add("dark");
  }

  resetTheme() {
    localStorage.removeItem("dark");
    document.body.classList.remove("dark");
  }

  /**
   * Método para voltar ao topo da página
   */
  toTop() {
    window.scrollTo(0, 0);
  }
}
