import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SeriesnumbersComponent } from './seriesnumbers/seriesnumbers.component';
import { HomeComponent } from '../app/home/home.component';
const routes: Routes = [
  {
    path:'contact' , component:ContactComponent
  },
  {
    path:'series' , component:SeriesnumbersComponent
  },
  {
    path:'home' , component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
