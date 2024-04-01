import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartLogoService } from 'src/app/services/cart-logo-sevices/cart-logo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // icon: string = '';
  // badgeCount: number = 0;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  searchText: string = '';

  router: any;
  iconElement: any;
  constructor(public cartLogoService:CartLogoService) {}

  highlightText() {
    const searchValue = this.searchText.toLowerCase();
    const textToHighlight = this.searchInput.nativeElement.value;
    const regex = new RegExp(searchValue, 'gi');
    const highlightedText = textToHighlight.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    this.searchInput.nativeElement.innerHTML = highlightedText;
  }
  // ngOnInit() {
  //   this.cartLogoService.icon$.subscribe(icon => {
  //     this.icon = icon;
  //   });
  //   this.cartLogoService.badgeCount$.subscribe(count => {
  //     this.badgeCount = count;
  //   });
  // }
}
