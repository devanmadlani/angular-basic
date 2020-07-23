import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from './order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  addedOrderLength = null;
  productAddedSubsctiprion: Subscription;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.fetchAvailbleProducts();
    this.productAddedSubsctiprion =this.orderService.productAddedChange.subscribe((orders) => {
      this.addedOrderLength = orders.length;
    })
  }

  ngOnDestroy() {
    this.productAddedSubsctiprion.unsubscribe();
    this.addedOrderLength = null;
  }

}
