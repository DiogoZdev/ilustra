import { Component, Input, OnInit } from '@angular/core';
import * as projects from 'src/assets/projects/projects.json'

import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  filtroSelecionado!: string;

  /**
   * Component's theme
   */
  @Input() theme = '';

  public filters = [
    {
      value: 'all',
      key: "CATEGORY.ALL"
    },
    {
      value: 'char',
      key: "CATEGORY.CHAR"
    },
    {
      value: 'book',
      key: "CATEGORY.NOTEBOOK"
    },
    {
      value: 'kids',
      key: "CATEGORY.KIDS"
    },
  ]

  /**
   * Individual project visualization boolean flag
   */
  viewDisplay = false;

  /**
   * Selected project
   */
  public selectedProject!: Project;

  /**
   * Projects list
   */
  projectsList: Project[] = JSON.parse(JSON.stringify(projects)).projects;

  /**
   * Visible Projects in the component
   */
  visibleProjectsList: Project[] = this.projectsList;

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
    console.log(item);
    this.filtroSelecionado = item;
    localStorage.setItem('filtro-galeria', item);

    this.visibleProjectsList = [];

    this.projectsList.forEach((p) => {
      if (p.categoria.indexOf(item) !== -1) {
        this.visibleProjectsList.push(p);
      }
    });
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
  }

}
