import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AlertBoxComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertBoxComponent,
    CardComponent,
  ]
})
export class ReusableModule { }
