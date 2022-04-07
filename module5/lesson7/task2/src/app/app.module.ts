import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TestmodulrModule } from './testmodulr.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TestmodulrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
