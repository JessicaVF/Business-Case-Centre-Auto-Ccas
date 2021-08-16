import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { ContactLodevieComponent } from './contact-lodevie/contact-lodevie.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ManageMyAccountComponent } from './manage-my-account/manage-my-account.component';
import { ManageMyAnnoncesByGaragesComponent } from './manage-my-annonces-by-garages/manage-my-annonces-by-garages.component';
import { ManageMyGaragesComponent } from './manage-my-garages/manage-my-garages.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path:"accueil", component: HomeComponent},
  {path:"contact", component: ContactLodevieComponent},
  {path:"login", component: LogInComponent},
  {path:"detail/:id", component:AnnonceDetailComponent},
  {path:"profile", component:MyProfileComponent},
  {path:"compte", component:ManageMyAccountComponent},
  {path:"garages", component:ManageMyGaragesComponent},
  {path:"annonces", component:ManageMyAnnoncesByGaragesComponent},
  {path:"profile/admin", component:ProfilAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
