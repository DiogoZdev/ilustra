import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.scss']
})
export class ArtDisplayComponent implements OnInit {


  @Input() project: Project = {
    titulo: 'empty title',
    categoria: ['', '', ''],
    criado: '00/00/0000',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatibus odit voluptatem magnam nisi obcaecati necessitatibus enim voluptatum minus architecto labore, blanditiis suscipit libero tenetur tempore fuga adipisci. Facilis quidem autem hic ex soluta ea. Provident architecto quisquam, libero et necessitatibus beatae nihil cum ab accusantium quis non eius mollitia?',
    imagens: [],
    thumbnail: '',
  };



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) { }

  ngOnInit(): void {
    this.project = this.data;
    console.log(this.project); 
  }

}
