import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogService.openDialog()
  }
}
