import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.scss'],
})
export class ArtDisplayComponent implements OnInit {

  @Input() project!: Project;

  @Output() closeDisplay = new EventEmitter();

  constructor(
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    if (document.body.classList.contains('dark')) {
      document
        .querySelector('#art-display-logo')
        ?.setAttribute(
          'src',
          'https://raw.githubusercontent.com/andressadesign/files/main/andressa/logo-claro.png'
        );
    } else {
      document
        .querySelector('#art-display-logo')
        ?.setAttribute(
          'src',
          'https://raw.githubusercontent.com/andressadesign/files/main/andressa/logo-escuro.png'
        );
    }
  }

  shareArt(tag: string) {
    navigator.clipboard.writeText(
      `${window.location.toString().split('?')[0]}?t=${tag}`
    );
    this.snack.open("Link copiado, só compartilhar!", ":)", { duration: 3500 });
  }

  closeArtDisplay() {
    this.closeDisplay.emit();
  }
}
