import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit { 

  @Input() theme = '';

  /**
   * Boolean de exibição do botão "voltar ao topo"
   */
  public showScroll: boolean = false;

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

    if (localStorage.getItem("page") === undefined) {
      localStorage.setItem("page", "home");
    }
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
