import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import {MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material';


import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
