import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SeriesnumbersComponent } from './seriesnumbers/seriesnumbers.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SeriesnumbersComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
