import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IeLibModule } from 'ie-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IeLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
