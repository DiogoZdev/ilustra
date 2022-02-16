import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  /**
   * Component's theme
   */
  @Input() theme = '';

  /**
   * Selected project in parent component
   */
  @Input() selectedProject!: Project | null;

  /**
   * Initial image position in image array
   */
  public imgCount: number = 0;

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

  /**
   * Method to show / hide information
   */
  toggleArtInfo() {
    this.showInfo = !this.showInfo;
  }
}
