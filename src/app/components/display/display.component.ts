import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projeto } from 'src/app/interfaces/projeto.interface';
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
  @Input() theme = '';

  /**
   * Projeto selecionado no componente pai
   */
  @Input() selectedProject!: Projeto | null;

  /**
   * Imagem com melhor definição
   */
  public imgCount: number = 0;

  public hasNext: boolean = false;

  /**
   * Flag de exibição de informações da arte
   */
  showInfo = false;

  @Output() viewEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validateNext();
  }

  /**
   * Método que ativa / desativa visualização do componente
   */
  toggleDisplayView() {
    this.viewEmitter.emit();
  }

  /**
   * Método para visualizar imagem anterior no projeto
   */
  previous() {
    this.imgCount--;
    this.validateNext();
  }

  /**
   * Método para visualizar imagem seguinte no projeto
   */
  next() {
    this.imgCount++;
    this.validateNext();
  }

  validateNext() {
    this.imgCount !== (this.selectedProject?.imagens.length as number) - 1
      ? this.hasNext = true
      : this.hasNext = false; 
  }

  /**
   * Método que exibe / esconde informações
   */
  toggleArtInfo() {
    this.showInfo = !this.showInfo;
  }
}
