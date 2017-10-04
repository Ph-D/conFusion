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
  MdCardModule,
  MdListModule,
} from '@angular/material';



import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent
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
    MdListModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [ DishService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
