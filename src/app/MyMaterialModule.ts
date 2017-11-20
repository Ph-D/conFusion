
import { ModuleWithProviders, NgModule } from '@angular/core';



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
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { MdDialogModule } from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MdFormFieldModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';


@NgModule({
    imports: [
          MdMenuModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MdInputModule,
    MdToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MdDialogModule,
    MdButtonModule,
    ],
    exports: [
          MdMenuModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MdInputModule,
    MdToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MdDialogModule,
    MdButtonModule,
    ],
    providers: [
    
    ]
    })
    
    export class MyMaterialModule { }