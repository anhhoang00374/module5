import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import {Routes, RouterModule} from '@angular/router';
import {DisplayMeanComponent} from './dislay-mean/display-mean.component';

const routes: Routes = [{
  path: 'mean/:id', component: DisplayMeanComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplayMeanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
