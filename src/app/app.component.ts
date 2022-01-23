import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'andressa-ilustra';

  page!: string;

  ngOnInit(): void {
      localStorage.setItem("page", "home");
      this.page = "home";
  }

  setPage(page: string) {
    this.page = page;
  }
}
