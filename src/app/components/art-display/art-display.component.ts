import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.scss'],
})
export class ArtDisplayComponent {

  @Input() project!: Project;

  @Output() closeDisplay = new EventEmitter();

  constructor(
    private snack: MatSnackBar,
  ) {}

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
