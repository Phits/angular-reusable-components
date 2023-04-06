import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box/alert-box.component';



@NgModule({
  declarations: [
    AlertBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertBoxComponent
  ]
})
export class ReusableModule { }
