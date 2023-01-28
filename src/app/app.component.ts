import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public title = 'andressa-ilustra';

  constructor(
  ) {}

  ngAfterViewInit() {
    const footerHeight = (document.getElementById("footer")?.offsetHeight ?? 50 ) + 20;
    document.getElementById("spacer")?.setAttribute("style", `height: ${footerHeight}px`)
  }
}
