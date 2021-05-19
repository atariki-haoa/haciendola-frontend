import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCardModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbAlertModule,
  ]})
export class ProductsModule { }
