import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './shared/navigataion/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './shared/navigataion/header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DialogService } from './services/dialog.service';
import { AuthService } from './auth/auth.service';
import { OrderService } from './orders/order.service';
import { CartComponent } from './orders/cart/cart.component';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { AdminService } from './admin/admin.service';
import { TableComponent } from './shared/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    OrdersComponent,
    NewOrderComponent,
    DialogComponent,
    LoadingComponent,
    CartComponent,
    OrderHistoryComponent,
    AdminComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ViewRequestsComponent,
    AddCustomerComponent,
    TableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DialogService, AuthService, OrderService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
