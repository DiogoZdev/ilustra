import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  filtroSelecionado!: string;

  public theme: string = '';

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      setTimeout(() => {
        this.themeService.getTheme().subscribe((tema) => {
          this.theme = tema;
        });
      }, 500);
    });

    if (!localStorage.getItem('filtro-galeria')) {
      localStorage.setItem('filtro-galeria', "all")
    }
  }

  filter(item: string) {
    this.filtroSelecionado = item;
    localStorage.setItem('filtro-galeria', item);
    console.log(this.filtroSelecionado);
    
  }

}
