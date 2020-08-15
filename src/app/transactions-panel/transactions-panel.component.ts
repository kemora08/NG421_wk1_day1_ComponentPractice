import { Component, OnInit } from '@angular/core';
import orders from '../orders';


@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.css']
})
export class TransactionsPanelComponent implements OnInit {

  orders = [];
  constructor() { }

  ngOnInit() {
    this.orders = orders;
  }

}
