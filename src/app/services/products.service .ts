import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DataManagment } from './data-managment.service';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { IProduct } from '../models/product';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class ProductsService {
    private token = null;
    constructor(
        private dataManagment: DataManagment,
        private authService: NbAuthService,
        ) {
        this.authService.onTokenChange()
            .subscribe((token: NbAuthJWTToken) => {
                if (token.isValid()) {
                    this.token = token;
                }
            });
    }

    allProducts(): Observable<any> {
       return this.dataManagment.getAll(this.token.token, 'products');
    }

    createProduct(product: IProduct): Observable<any> {
        return this.dataManagment.post (product, this.token.token, 'products');
    }

    updateProduct(product: IProduct): Observable<any> {
        return this.dataManagment.put(product, this.token.token, 'products');
    }

    deleteProduct(product: IProduct): Observable<any> {
       return this.dataManagment.delete(product, this.token.token, 'products');
    }
}
