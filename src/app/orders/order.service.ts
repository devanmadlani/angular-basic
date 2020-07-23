import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  productsChanged = new Subject<Product[]>()
  productAddedChange = new Subject<any>();
  private availableProducts: Product[] = []
  private addedProduct: Product;
  private order: Product[] = []

  constructor(private db: AngularFirestore) { }

  getAvailableProducts() {
    return this, this.availableProducts.slice()
  }

  addProductToCart(selectedId: string) {
    this.addedProduct = this.availableProducts.find(product => product.id == selectedId);
    this.order.push(this.addedProduct);
    this.productAddedChange.next(this.order.slice());
  }

  submitOrder() {
    this.addedProduct = null;
    this.productAddedChange.next(null)
  }

  getCreatedOrder() {
    return this.order.slice();
  }

  fetchAvailbleProducts() {
    this.db.collection('products').
      snapshotChanges().pipe(map((productArr) => {
        return this.formProductObject(productArr)
      })).subscribe((product: Product[]) => {
        this.availableProducts = product;
        this.productsChanged.next([...this.availableProducts]);
      });
  }

  formProductObject(productArr): Product[] {
    console.log(productArr[0].payload.doc.data())
    return productArr.map((product) => {
        return {
          id: product.payload.doc.id,
          name: product.payload.doc.data().name,
          amount: product.payload.doc.data().amount,
          currency: product.payload.doc.data().currency
        }
    })
  }

  submitOrderToDatabase(orderArray: Product[]) {
    this.db.collection('orderRequest').add({
      ...orderArray,
      status: 'pending'
    });
  }
}
