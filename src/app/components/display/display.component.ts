import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, AfterViewInit {

  /**
   * Component's theme
   */
  @Input() theme = '';

  /**
   * Selected project in parent component
   */
  @Input() selectedProject!: Project;

  /**
   * Filtered list from parent component
   */
  @Input() displayGallery!: Project[] | [];

  /**
   * Initial image position in image array
   */
  public imgCount: number = 0;

  /**
   * Selected Image Position in array
   */
  public projectCount!: number;

  /**
   * Verification of next image within the visualized project
   */
  public hasNext: boolean = false;

  /**
   * Boolean flag to exhibit project information
   */
  public showInfo = false;

  /**
   * Event Emitter for project template visualization.
   */
  @Output() viewEmitter = new EventEmitter();

  constructor() { }

  /**
   * Initial component methods
   */
  ngOnInit() {    
    this.validateNext();
  }

  ngAfterViewInit() {
    this.checkProjectPosition();
  }

  /**
   * Method to validate selected project position in array
   */
  checkProjectPosition() {
    this.projectCount = this.displayGallery.findIndex(proj => proj === this.selectedProject);
  }

  /**
   * Method to set new project to be displayed;
   */
  setProject() {
    this.imgCount = 0;
    this.selectedProject = this.displayGallery[this.projectCount];
    this.validateNext();
  }

  /**
   * Method to activate / deactivate component visualization
   */
  toggleDisplayView() {
    this.viewEmitter.emit();
  }

  /**
   * Method to visualize previous image, if it exists
   */
  previous() {
    this.imgCount--;
    this.validateNext();
  }

  /**
   * Method to visualize next image, if it exists
   */
  next() {
    this.imgCount++;
    this.validateNext();
  }

  /**
   * Method to validate if project has a next image
   */
  validateNext() {
    this.imgCount !== (this.selectedProject?.imagens.length as number) - 1
      ? this.hasNext = true
      : this.hasNext = false; 
  }

  previousProject() {
    if(this.projectCount === 0) {
      this.projectCount = this.displayGallery.length -1;
    } else {
      this.projectCount -= 1;
    }
    this.setProject();    
  }

  /**
   * Method to navigate to next Project
   */
  nextProject() {
    if(this.displayGallery.length === (this.projectCount + 1)) {
      this.projectCount = 0
    } else {
      this.projectCount += 1; 
    }
    this.setProject()
  }

  /**
   * Method to show / hide information
   */
  toggleArtInfo() {
    this.showInfo = !this.showInfo;
  }
}
