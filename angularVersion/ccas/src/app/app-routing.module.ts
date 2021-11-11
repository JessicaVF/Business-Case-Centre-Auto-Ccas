import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { ContactLodevieComponent } from './contact-lodevie/contact-lodevie.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ManageAnnoncesAdminComponent } from './manage-annonces-admin/manage-annonces-admin.component';
import { ManageGaragesAdminComponent } from './manage-garages-admin/manage-garages-admin.component';
import { ManageMyAccountComponent } from './manage-my-account/manage-my-account.component';
import { ManageMyAnnoncesComponent } from './manage-my-annonces/manage-my-annonces.component';
import { ManageMyGaragesComponent } from './manage-my-garages/manage-my-garages.component';
import { ManageUsersAdminComponent } from './manage-users-admin/manage-users-admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path:"accueil", component: HomeComponent},
  {path:"contact", component: ContactLodevieComponent},
  {path:"login", component: LogInComponent},
  {path:"detail/:id", component:AnnonceDetailComponent},
  {path:"profil", component:MyProfileComponent},
  {path:"compte", component:ManageMyAccountComponent},
  {path:"garages", component:ManageMyGaragesComponent},
  {path:"annonces", component:ManageMyAnnoncesComponent},
  {path:"admin/profil", component:ProfilAdminComponent},
  {path:"admin/utilisateurs", component:ManageUsersAdminComponent},
  {path:"admin/garages", component:ManageGaragesAdminComponent},
  {path:"admin/annonces", component:ManageAnnoncesAdminComponent},
  {path:"user/detail/:id", component:UserDetailComponent},
  {path: "**", component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
