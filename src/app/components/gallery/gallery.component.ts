import { Component, HostListener, Input, OnInit } from '@angular/core';
import * as projects from 'src/assets/projects/projects.json'

import { Project } from 'src/app/interfaces/project.interface';
import { ActivatedRoute, Router } from '@angular/router';

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
  

  public filters = [
    {
      value: 'all',
      key: "CATEGORY.ALL"
    },
    {
      value: 'visual-id',
      key: "CATEGORY.ID"
    },
    {
      value: 'drawings',
      key: "CATEGORY.DRAWINGS"
    },
    {
      value: 'covers',
      key: "CATEGORY.NOTEBOOK"
    }
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

  constructor(
    private _route: ActivatedRoute,
  ) { }
  
  /**
   * Initial method
   */
  ngOnInit(): void {
    const filter = this._route.snapshot.paramMap.get('filter');
    filter ? this.filter(filter) : this.filter('all');
  }

  /**
   * Host Listener for closing modal with ESC
   * @param event keyboard event
   */
  @HostListener('window:keydown.escape', ['$event'])
  handleEsc(event: KeyboardEvent) {
    this.closeDisplay();
  }

  /**
   * Filtering image method
   * @param item filter value
   */
  filter(item: string) {
    this.filtroSelecionado = item;

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

  /**
   * Method for closing project visualization
   */
  closeDisplay() {
    this.viewDisplay = false;
  }
}
