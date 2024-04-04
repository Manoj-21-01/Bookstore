import { TestBed } from '@angular/core/testing';

import { CartLogoService } from './cart-logo.service';

describe('CartLogoService', () => {
  let service: CartLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
