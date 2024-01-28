import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Array<Book> = []
  constructor() { }

  getCart() {
    return this.cart
  }

  addCart(book: Book) {
    this.cart.push(book);
    console.log(this.cart)
  }
  removeCart(book: Book) {
    this.cart = this.cart.filter(b => b.id !== book.id);
    console.log(this.cart)
  }

}
