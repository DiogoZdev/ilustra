import { Component, Input, OnInit } from '@angular/core';
import * as projects from 'src/assets/projects/projects.json'

import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  filtroSelecionado!: string;

  /**
   * Component's theme
   */
  @Input() theme = '';

  /**
   * Individual project visualization boolean flag
   */
  viewDisplay = false;

  /**
   * Selected project
   */
  public selectedProject!: Project;

  /**
   * Lista de projects 
   */
  projectsList: Project[] = JSON.parse(JSON.stringify(projects)).projects;

  /**
   * Lista de projects visíveis no compónente
   */
  visibleProjectsList: Project[] = this.projectsList;

  /**
   * Método construtor
   * @param themeService Instância do themeService
   */
  constructor() { }
  
  /**
   * Initial method
   */
  ngOnInit(): void {
    if (!localStorage.getItem('filtro-galeria')) {
      localStorage.setItem('filtro-galeria', "all")
    }
  }

  /**
   * Filtering image method
   * @param item filter value
   */
  filter(item: string) {
    this.filtroSelecionado = item;
    localStorage.setItem('filtro-galeria', item);
    console.log(this.filtroSelecionado);
  }

  /**
   * Method to open project visualization
   * @param project 
   */
  toggleDisplay(project?: Project) {
    this.viewDisplay = !this.viewDisplay;
    if (project) {
      this.selectedProject = project;
    } 
    console.log(this.selectedProject);
  }

}
