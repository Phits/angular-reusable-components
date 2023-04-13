import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { CardComponent } from './card/card.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GlobalButtonComponent } from './global-button/global-button.component';
import { GlobalTableComponent } from './global-table/global-table.component';
import { GlobalTabsComponent } from './global-tabs/global-tabs.component';



@NgModule({
  declarations: [
    AlertBoxComponent,
    CardComponent,
    JumbotronComponent,
    GlobalButtonComponent,
    GlobalTableComponent,
    GlobalTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertBoxComponent,
    CardComponent,
    JumbotronComponent,
    GlobalButtonComponent,
    GlobalTableComponent,
    GlobalTabsComponent,
  ]
})
export class ReusableModule { }
