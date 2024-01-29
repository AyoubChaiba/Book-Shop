import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BooksModule } from "./books/books.module";
import { BrowserModule } from "@angular/platform-browser";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "./auth/auth.module";


@NgModule({
  declarations : [
      AppComponent,
      CartComponent,
    ],
  imports: [ AppRoutingModule ,BrowserModule, BooksModule , AuthModule] ,
  bootstrap: [AppComponent] ,
})


export class AppModule {}
