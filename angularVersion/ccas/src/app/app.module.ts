import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AnnoncePreviewComponent } from './annonce-preview/annonce-preview.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { LogInComponent } from './log-in/log-in.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactLodevieComponent } from './contact-lodevie/contact-lodevie.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SearchBarComponent,
    AnnoncePreviewComponent,
    AnnonceDetailComponent,
    LogInComponent,
    AnnonceListComponent,
    ContactLodevieComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
