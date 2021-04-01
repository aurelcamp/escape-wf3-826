import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TestComponent } from './components/test/test.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ChoiceNbComponent } from './components/choice-nb/choice-nb.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    TestComponent,
    ReservationComponent,
    ChoiceNbComponent,
    HomeComponent,
    RoomsComponent,
    ContactComponent,
    Error404Component,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
