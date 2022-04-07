import { Component, OnInit } from '@angular/core';

import {Product} from '../model/product';
import {IProductService} from '../service/iproduct.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: Product[];
  constructor(private service: IProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.listProduct = this.service.getAll();
  }
}
