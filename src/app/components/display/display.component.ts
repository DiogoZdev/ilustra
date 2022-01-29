import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  /**
   * Tema do componente
   */
  @Input() theme: string = '';

  /**
   * Flag de exibição de informações da arte
   */
  showInfo = false;

  @Output() viewEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  /**
   * Método que ativa / desativa visualização do componente
   */
  toggleDisplayView() {
    this.viewEmitter.emit();
  }

  /**
   * Método que exibe / esconde informações
   */
  toggleArtInfo() {
    this.showInfo = !this.showInfo;
  }
}
