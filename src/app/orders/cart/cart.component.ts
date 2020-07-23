import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Amount', 'Currency', 'Actions'];
  dataSource: MatTableDataSource<Product>;
  orders: Product[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.productAddedChange.subscribe((orders) => {
      this.orders = orders;
      this.dataSource = orders;
    })
  }

  submitOrder() {
    this.orderService.submitOrderToDatabase(this.orders)
  }
}
