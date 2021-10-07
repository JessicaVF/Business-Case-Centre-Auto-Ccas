import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AnnoncePreviewComponent } from './annonce-preview/annonce-preview.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { LogInComponent } from './log-in/log-in.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactLodevieComponent } from './contact-lodevie/contact-lodevie.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ManageMyAccountComponent } from './manage-my-account/manage-my-account.component';
import { ManageMyGaragesComponent } from './manage-my-garages/manage-my-garages.component';
import { ManageMyAnnoncesComponent } from './manage-my-annonces/manage-my-annonces.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { ManageUsersAdminComponent } from './manage-users-admin/manage-users-admin.component';
import { ManageGaragesAdminComponent } from './manage-garages-admin/manage-garages-admin.component';
import { ManageAnnoncesAdminComponent } from './manage-annonces-admin/manage-annonces-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GarageComponent } from './garage/garage.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { AddGarageComponent } from './add-garage/add-garage.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReferenceSearchComponent } from './reference-search/reference-search.component';
import { LogButtonComponent } from './log-button/log-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SearchBarComponent,
    AnnoncePreviewComponent,
    AnnonceDetailComponent,
    LogInComponent,
    AnnonceListComponent,
    ContactLodevieComponent,
    HomeComponent,
    FooterComponent,
    MyProfileComponent,
    ManageMyAccountComponent,
    ManageMyGaragesComponent,
    ManageMyAnnoncesComponent,
    ProfilAdminComponent,
    MenuUserComponent,
    ManageUsersAdminComponent,
    ManageGaragesAdminComponent,
    ManageAnnoncesAdminComponent,
    MenuAdminComponent,
    UserComponent,
    UserDetailComponent,
    GarageComponent,
    AddAnnonceComponent,
    DeleteModalComponent,
    AddGarageComponent,
    AddUserComponent,
    ReferenceSearchComponent,
    LogButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
