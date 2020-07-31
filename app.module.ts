import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { betterhighdirective } from './highdirective/highdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    betterhighdirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
