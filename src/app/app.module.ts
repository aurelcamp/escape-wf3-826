import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
