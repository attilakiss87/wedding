import { Component, NgModule } from '@angular/core';
import { NgxLoadingSpinnerModule } from 'ngx-loading-spinner-fork';

@NgModule({
  imports : [
    NgxLoadingSpinnerModule.forRoot()
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
