import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],


  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MaterialsModule { }
