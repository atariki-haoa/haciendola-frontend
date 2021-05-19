import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbAccordionModule,
    NbInputModule,
    NbButtonModule,
    NbAlertModule,
  ]
})
export class ProductModule { }
