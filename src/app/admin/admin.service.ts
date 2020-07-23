import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  orderRequestChange = new Subject<any>();
  constructor(private db: AngularFirestore) { }

  addProductToDatabase(product: Product) {
    this.db.collection('products').add(product);
  }

  getAllOrderRequests() {
    this.db.collection('orderRequest').valueChanges().subscribe((orders) => {
        console.log(orders)
        this.orderRequestChange.next({...orders})
    })
  }
}
