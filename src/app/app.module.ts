import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'pipes-module';
import { TranslatePipe } from './utils/pipes/translate.pipe';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DisplayComponent } from './components/display/display.component';
import { SupportComponent } from './components/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DisplayComponent,
    TranslatePipe,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
