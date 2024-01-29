import { Component } from "@angular/core";
import { CartService } from './cart/cart.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector : 'app-root',
  templateUrl : 'app.component.html',
  styleUrls : ['app.component.scss']
})

export class AppComponent {
  title = 'books';

  constructor(private cartService : CartService , private authService : AuthService){}


  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }


  logout() {
    this.authService.logout();
  }


  getData(){
    return this.cartService.getCart();
  }

}
