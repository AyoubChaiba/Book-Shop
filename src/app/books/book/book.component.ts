import { Component, Input, Output , EventEmitter } from '@angular/core';
import { Book } from '../../types/book';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.sass'
})
export class BookComponent {
  constructor (private cartService: CartService) {}
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  addBook() {
    this.isInCart = true ;
    this.cartService.addCart(this.book)
  }

  removeBook() {
    this.isInCart = false ;
    this.cartService.removeCart(this.book)
  }

}
