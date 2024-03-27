import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartLogoService } from 'src/app/services/cart-logo-sevices/cart-logo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // icon: string = '';
  // badgeCount: number = 0;
  router: any;
  iconElement: any;
  constructor(public cartLogoService:CartLogoService) {}

  // ngOnInit() {
  //   this.cartLogoService.icon$.subscribe(icon => {
  //     this.icon = icon;
  //   });
  //   this.cartLogoService.badgeCount$.subscribe(count => {
  //     this.badgeCount = count;
  //   });
  // }
}
