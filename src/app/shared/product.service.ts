import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(productService: ProductService) {
    // start using the service, e.g. productService.getMyDate();
   }
}
