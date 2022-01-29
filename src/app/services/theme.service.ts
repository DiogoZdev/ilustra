import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ThemeService {
  
  themeObservable: Subject<string> = new Subject();

  setTheme(value: string) {
    // recebe novo valor para o observável
    localStorage.setItem("theme", value);
    this.themeObservable.next(value);
  }

  getTheme(): Observable<string> {
    // notifica os inscritos
    return this.themeObservable.asObservable();
  }
}

