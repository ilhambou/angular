import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Array<any>=[
    {id:1, name:"y",price : 775,checked:false},
    {id:2, name:"x",price : 754,checked:false},
    {id:3, name:"z",price : 872,checked:true},



  ]

  handelCheckProduct(product: any) {
    product.checked=!product.checked;

  }
}
