import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.scss']
})
export class ArtDisplayComponent implements OnInit {


  @Input() project!: Project;

  @Output() closeDisplay = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.project); 
  }

  closeArtDisplay() {
    this.closeDisplay.emit();
  }

}
