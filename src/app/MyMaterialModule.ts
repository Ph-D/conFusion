
import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MdInputModule,
    MdFormFieldModule
    
} from "@angular/material";

const MAT_MODULES  = [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MdInputModule,
    MdFormFieldModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MyMaterialModule { }