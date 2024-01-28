import { Component } from "@angular/core";
import { CartService } from './cart/cart.service';

@Component({
  selector : 'app-root',
  templateUrl : 'app.component.html',
  styleUrls : ['app.component.scss']
})

export class AppComponent {
  title = 'books';

  constructor(private cartService : CartService){}

  getData(){
    return this.cartService.getCart();
  }

}
