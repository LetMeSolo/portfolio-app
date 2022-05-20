import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main-layout/main/main.component';
import { AboutUsComponent } from './components/main-layout/about-us/about-us.component';
import { ContactsComponent } from './components/main-layout/contacts/contacts.component';
import { MogoComponent } from './components/main-layout/main/projects/mogo/mogo.component';
import { ActiveBoxComponent } from './components/main-layout/main/projects/active-box/active-box.component';
import { FilmsComponent } from './components/main-layout/main/projects/films/films.component';
import { BildCompanyComponent } from './components/main-layout/main/projects/bild-company/bild-company.component';
import { SnakeGameComponent } from './components/main-layout/main/projects/snake-game/snake-game.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    ContactsComponent,
    MogoComponent,
    ActiveBoxComponent,
    FilmsComponent,
    BildCompanyComponent,
    SnakeGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
