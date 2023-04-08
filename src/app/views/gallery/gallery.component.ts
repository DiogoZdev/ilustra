import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Project, ProjectList } from 'src/app/interfaces/project.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ArtDisplayComponent } from 'src/app/components/art-display/art-display.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private route: ActivatedRoute,
    private http: HttpClient,
    private snack: MatSnackBar,
  ) { }
  
  /**
   * Initial method
   */
  ngOnInit(): void {
    this.loading = true;

    try {
      this.http.get("https://raw.githubusercontent.com/andressadesign/files/main/projects.json")
      .toPromise()
      .then((result) => {      
        this.projectsList = (result as ProjectList).projects;

        this.checkFilters();
      });
    }
    catch (error) {
      this.snack.open('Ocorreu um erro ao carregar os projetos! :(');
      console.error(error);
    }
    finally {
      this.loading = false;
    }
    
  }

  checkFilters() {
    const filter = this.route.snapshot.queryParamMap.get('filter');
    const hasRealfilter = filter ? !!this.projectsList.find((p) => p.categoria.indexOf(filter) !== -1) : false;

    hasRealfilter && filter ? this.filter(filter) : this.filter('all');
    
    const tag = this.route.snapshot.queryParamMap.get('t');
    const foundProject = tag ? this.projectsList.find((p) => p.tag === tag) : null;
    
    if (foundProject) {
      this.selectedProject = foundProject;
      this.viewDisplay = true;
    }
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
