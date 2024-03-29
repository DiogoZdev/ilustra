import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { languages } from 'src/app/config/languages';
import { pages } from 'src/app/config/pages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 

  private appWindow = document.querySelector("#app-wrapper");

  public languages = languages;
  public pages = pages;

  actualPage: string = "/"

  /**
   * Boolean de exibição do menu de configurações
   */
  public showConfiguration: boolean = false;

  /**
   * Output de página
   */
  @Output() pageEmitter = new EventEmitter<string>();

  /**
   * Método inicial do componente
   */
  ngOnInit(): void {
    const theme = localStorage.getItem("dark");
    if (theme) this.setDarkTheme();

    const lang = localStorage.getItem("language");
    lang === null || undefined
    ? this.setLanguage('PT')
    : this.setLanguage(lang);

    this.checkPage();
  }

  checkPage() {
    this.toTop();
    setTimeout(() => {
      const url = window.location.href;
      url.indexOf("about") === -1 && url.indexOf("products") === -1 ? this.actualPage = "/" : ""
      url.indexOf("about") !== -1 ? this.actualPage = "about" : "";
      url.indexOf("products") !== -1 ? this.actualPage = "products" : "";
    }, 50)
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
    this.appWindow?.scrollTo(0, 0);
  }
}
