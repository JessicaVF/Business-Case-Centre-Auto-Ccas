import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { ContactLodevieComponent } from './contact-lodevie/contact-lodevie.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactLodevieComponent},
  {path:"login", component: LogInComponent},
  {path:"detail/:id", component:AnnonceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
