import { Component, OnInit } from '@angular/core';
import { NbDialogService  } from '@nebular/theme';

import { IProduct } from 'app/models/product';
import { DataManagment } from 'app/services/data-managment.service';
import { ProductsService } from 'app/services/products.service ';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [
    ProductsService,
    DataManagment,
  ]
})
export class ProductsComponent implements OnInit {

  public products: Array<IProduct> = [];

  constructor(
    private productsData: ProductsService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.fillData();
  }

  fillData(): void {
    const data = this.productsData.allProducts().subscribe(payload => {
      this.products = payload.products;
    }, error => console.log(error));
  }

  openWindow(product: IProduct | null) {
    if(!product) product = {
      id: null,
      handle: '',
      title: 'Nuevo producto',
      description: '',
      sku: null,
      grams: null,
      stock: null,
      price: null,
      comparePrice: null,
      barcode: null,
    };
    this.dialogService.open(ProductComponent, { context : { product } })
    .onClose.subscribe(product => {
      console.log(product);
      if(!product) return;
      this.products.push(product.product);
    });
  }

  removeProduct(p: IProduct, index: number) {
    this.productsData.deleteProduct(p).subscribe(
      response => {
        if (response.affected < 1) {
          alert('Producto no fue afectados');
        } else {
          this.products.splice(index, 1);
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage) {
          const body = JSON.parse(error._body);
          alert(body.message);
        }
      });
  }
}

