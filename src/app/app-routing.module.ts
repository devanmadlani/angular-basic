import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from './auth/auth.guard';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]}
  { path: 'orders', component: OrdersComponent },
  { path: 'new-customer', component: AddCustomerComponent},
  { path: 'new-product', component: AddProductsComponent},
  { path: 'view-products', component: ViewProductsComponent},
  { path: 'view-requests', component: ViewRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
