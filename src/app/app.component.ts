import { Component, OnInit } from '@angular/core';

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
   * Método construtor do componente
   */
  constructor () {}

  /**
   * Método inicial do componente
   */
  ngOnInit(): void { }
}
