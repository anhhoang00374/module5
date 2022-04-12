import { Component, OnInit } from '@angular/core';
import {IProductService} from '../service/iproduct.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  constructor(private service: IProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
  }

  submit(productForm: FormGroup) {
    this.service.addNew(productForm.value);
    console.log(productForm.value);
  }
}
