import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { NgForm } from '@angular/forms';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  products: Product[] = [];
  productChangeSubscription: Subscription;

  constructor(private dialogService: DialogService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAvailableProducts();
    this.productChangeSubscription = this.orderService.productsChanged.subscribe((products: Product[]) => {
      this.products = products;
    })
  }

  openDialog() {
    
  }
  
  onOrderSubmit(form: NgForm) {
    this.orderService.addProductToCart(form.value.order)
  }
}
