import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IeLibModule } from 'ie-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
