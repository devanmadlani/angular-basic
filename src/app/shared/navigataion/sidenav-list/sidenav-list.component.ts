import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavClose = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
   this.authSubscription =  this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
      console.log(authStatus)
    })
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
