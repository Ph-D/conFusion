import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';



import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
       MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
