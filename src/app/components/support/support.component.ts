import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  @Input() theme = '';

  constructor() { }

  ngOnInit(): void {
  }

}
