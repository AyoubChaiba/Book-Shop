import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent {

  carts: Book[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }

  totalCart() {
    let total = 0;
    this.carts.forEach(element => {
      total += element.amount;
    });
    return total;
  }

  removeCart(cart: Book) {
    this.cartService.removeCart(cart);
    this.carts = this.cartService.getCart();
  }

}
