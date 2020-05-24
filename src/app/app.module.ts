import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { OrderListComponent } from './orders/order-list/order-list.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DialogService } from './services/dialog.service';
import { AuthService } from './auth/auth.service';

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
    OrderListComponent,
    DialogComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [DialogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
