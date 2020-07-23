import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  get registerFormControl() { return this.loginForm.controls; }

  onSubmit() {
    // this.adminService.getAllOrderRequests();
    // this.adminService.orderRequestChange.subscribe((orders) => {
    //   console.log(orders)
    // })
    this.adminService.addProductToDatabase({
      name:'product 10',
      amount:2,
      date: new Date,
      currency: 'rupee'
    })
  }

}
