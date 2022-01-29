import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Tema do componente
   */
  public theme = '';

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.themeService.getTheme().subscribe((tema) => {
        this.theme = tema;
      })
    }, 500);
  }

}
