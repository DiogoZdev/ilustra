import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showConfiguration: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("language") === undefined) {
      localStorage.setItem("language", "PT");
    }

    if (localStorage.getItem("theme") === undefined) {
      localStorage.setItem("theme", "light")
    };
  }

  toggleConfiguration() {
    this.showConfiguration = !this.showConfiguration;
  }

  setLanguage(value: string): void {
    localStorage.setItem("language", value);
    // implementar pipe de tradução
    console.log(value);
  }

  setTheme(value: string): void {
    localStorage.setItem("theme", value)
    // implementar alteração do tema
    console.log(value);
  }
}
