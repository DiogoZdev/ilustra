import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  /**
   * Definição do tema
   */
  theme!: string;

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.themeService.getTheme().subscribe((tema) => {
        this.theme = tema;
      });
    }, 500)
  }
}