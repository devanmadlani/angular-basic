import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus
    })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
