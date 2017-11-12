import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material';
import { MdDialogModule } from '@angular/material';
import {MatSelectModule} from '@angular/material';


import {MatCheckboxModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';


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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { LeaderService } from './services/leader.service';
import {MdFormFieldModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MdDialogModule,
    MdButtonModule,
    FormsModule,
    MdInputModule,
    ReactiveFormsModule,
    MdMenuModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatProgressSpinnerModule
    
  ],
  providers: [ DishService, PromotionService, LeaderService ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
