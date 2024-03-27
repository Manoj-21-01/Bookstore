import { Component } from '@angular/core';

interface tableData {
  email: string;
  contact: string;
  address: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  displayedColumns: string[] = ['email', 'contact', 'address'];
  dataSource = TABLE_DATA;
}

const TABLE_DATA: tableData[] = [
  { email: 'manoj@bookstore.com', contact: '+91 9823423532', address: 'SRM Nagar, Potheri, Kattankulathur, 603203' }
]