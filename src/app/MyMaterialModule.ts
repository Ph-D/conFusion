
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
    MdFormFieldModule,
    MatGridListModule,
    MatListModule

    
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
    MdFormFieldModule,
    MatGridListModule,
    MatListModule

];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MyMaterialModule { }