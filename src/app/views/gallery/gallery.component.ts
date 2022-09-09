import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Project, ProjectList } from 'src/app/interfaces/project.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ArtDisplayComponent } from 'src/app/components/art-display/art-display.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  filtroSelecionado!: string;

  public loading = false;

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
  projectsList: Project[] = [];

  /**
   * Visible Projects in the component
   */
  visibleProjectsList: Project[] = this.projectsList;

  constructor(
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _dialog: MatDialog,
  ) { }
  
  /**
   * Initial method
   */
  ngOnInit(): void {
    this.loading = true;

    this._http.get("https://raw.githubusercontent.com/andressadesign/files/main/projects.json")
    .toPromise().then((result) => {      
      this.projectsList = (result as ProjectList).projects;

      const filter = this._route.snapshot.paramMap.get('filter');
      filter ? this.filter(filter) : this.filter('all');

      this.loading = false;
    })
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

  openProject(project: Project) {
    this.selectedProject = project;
    this.viewDisplay = true;
  }

  closeDisplay() {
    this.viewDisplay = false;
  }
}
