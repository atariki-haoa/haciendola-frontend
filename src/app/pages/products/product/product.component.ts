import { Component, Inject, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

import { IProduct } from 'app/models/product';
import { DataManagment } from 'app/services/data-managment.service';
import { ProductsService } from 'app/services/products.service ';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [
    ProductsService,
    DataManagment,
  ]
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;
  show: boolean = true;
  showSuccess: boolean = false;
  showFail: boolean = false;

  constructor(
    protected dialogRef: NbDialogRef<IProduct>,
    private productsData: ProductsService,
  ) {
  }

  ngOnInit(): void {
    if (!this.product.id) {
      this.show = false;
    }
  }

  
  saveProduct({id, ...p}: IProduct) {
    this.productsData.createProduct(p).subscribe(
      response => {
        if (response.error) {
          this.showFail = true;
          this.showSuccess = false;
        } else {
          this.dialogRef.close(response);
          this.showFail = false;
          this.showSuccess = true;
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
        }
      });
  }

  updateProduct(p: IProduct) {
    console.log(p);
    this.productsData.updateProduct(p).subscribe(
      response => {
        if (response.affected > 0) {
          this.showFail = true;
          this.showSuccess = false;
        } else {
          this.showFail = false;
          this.showSuccess = true;
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage) {
          console.log(errorMessage);
        }
      });
  }

}
