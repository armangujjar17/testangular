import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent,OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
