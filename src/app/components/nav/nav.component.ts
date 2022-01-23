import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  /**
   * Boolean de exibição do botão "voltar ao topo"
   */
  public showScroll: boolean = false;

  /**
   * Boolean de exibição do menu de configurações
   */
  public showConfiguration: boolean = false;


  @Output() pageEmitter = new EventEmitter<string>();

  /**
   * Método construtor do componente
   */
  constructor() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    window.scrollY > 50
    ? this.showScroll = true 
    : this.showScroll = false;
  }

  /**
   * Método inicial do componente
   */
  ngOnInit(): void {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "PT");
    }

    if (localStorage.getItem("theme") === undefined) {
      localStorage.setItem("theme", "light")
    };
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

    if (this.showConfiguration === true) {
      setTimeout(() => {
        this.showConfiguration = false;
      }, 15000)
    }
  }

  /**
   * Método para alterar idioma da UI
   * @param value Idioma selecionado
   */
  setLanguage(lang: string): void {
    localStorage.setItem("language", lang);
    console.log(lang);
  }

  /**
   * Método de alteração do tema
   * @param value Tema selecionado
   */
  setTheme(value: string): void {
    localStorage.setItem("theme", value)
    // TODO implementar alteração do tema
    console.log(value);
  }

  /**
   * Método para voltar ao topo da página
   */
  toTop() {
    window.scrollTo(0, 0);
  }
}
