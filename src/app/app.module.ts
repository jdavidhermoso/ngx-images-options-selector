import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxImagesOptionsSelectorModule} from 'ngx-images-options-selector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImagesOptionsSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
