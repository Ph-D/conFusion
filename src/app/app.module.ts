import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';




// import {MatCheckboxModule} from '@angular/material';
// import {MatProgressSpinnerModule} from '@angular/material';
// import {
//   MdButtonModule,
//   MdMenuModule,
//   MdToolbarModule,
//   MdIconModule,
//   MdCardModule,
//   MdListModule,
// } from '@angular/material';
// import {MatListModule} from '@angular/material';
// import {MatGridListModule} from '@angular/material';
// import { MdDialogModule } from '@angular/material';
// import {MatSelectModule} from '@angular/material';
// import {MdFormFieldModule} from '@angular/material';
// import {MdInputModule} from '@angular/material';
// import {MatSlideToggleModule} from '@angular/material';
// import {MatSliderModule} from '@angular/material';

import { MyMaterialModule } from './MyMaterialModule';



import { FlexLayoutModule } from '@angular/flex-layout';

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



import { FormsModule, ReactiveFormsModule, } from '@angular/forms';


import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive'; 

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
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    // MdMenuModule,
    // MdListModule,
    // MdIconModule,
    // MdCardModule,
    // MatSlideToggleModule,
    // MatSliderModule,
    // MatSelectModule,
    // MatProgressSpinnerModule,
    // MdInputModule,
    // MdToolbarModule,
    // MatListModule,
    // MatGridListModule,
    // MatCheckboxModule,
    FlexLayoutModule,
    // MdDialogModule,
    // MdButtonModule,
    AppRoutingModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
    
  ],
  providers: [ 
    DishService, 
    PromotionService, 
    LeaderService, 
    { provide : 'BaseURL', useValue: baseURL }, 
    ProcessHTTPMsgService ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
