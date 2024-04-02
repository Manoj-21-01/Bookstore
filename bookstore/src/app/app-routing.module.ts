import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { BookviewComponent } from './components/bookview/bookview.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "bookstore/books",
    component: BooksContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "bookstore",
    component: BookstoreComponent,
    children: [
      
      {
        path: "bookview/:id",
        component: BookviewComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
