import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { BooksComponent } from './components/books/books.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookviewComponent } from './components/bookview/bookview.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CartComponent } from './components/cart/cart.component';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { FilterPipe } from './pipe/filter.pipe';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BookstoreComponent,
    FooterComponent,
    HeaderComponent,
    BooksComponent,
    BooksContainerComponent,
    BookviewComponent,
    CartComponent,
    CheckoutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatBadgeModule,
    MatTableModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
