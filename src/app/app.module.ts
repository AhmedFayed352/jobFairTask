import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MychartsComponent } from './components/mycharts/mycharts.component';
import { SearchPipe } from './Pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    MychartsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
