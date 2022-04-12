import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../model/product';
import {IProductService} from '../service/iproduct.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  constructor(private  activatedRouter: ActivatedRoute, private service: IProductService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
      this.product = this.service.getById(this.id);
      // console.log(this.id);
      console.log(this.product);
    });
  }

}
