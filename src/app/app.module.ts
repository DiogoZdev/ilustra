import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'pipes-module';
import { TranslatePipe } from './utils/pipes/translate.pipe';
import { GalleryComponent } from './views/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { DisplayComponent } from './components/display/display.component';
import { SupportComponent } from './components/support/support.component';
import { ProductsComponent } from './views/products/products.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArtDisplayComponent } from './components/art-display/art-display.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoverComponent } from './components/cover/cover.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardMockComponent } from './components/product-card-mock/product-card-mock.component';

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
    ProductsComponent,
    ErrorComponent,
    LoaderComponent,
    ArtDisplayComponent,
    CoverComponent,
    ProductCardComponent,
    ProductCardMockComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    PipesModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
