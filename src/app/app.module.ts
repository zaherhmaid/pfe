import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AddchecklistComponent } from './checklist/addchecklist/addchecklist.component';
import { ListchecklistComponent } from './checklist/listchecklist/listchecklist.component';
import { checklistComponent } from './checklist/checklist.component';

import { AddcritereComponent } from './critere/addcritere/addcritere.component';
import { ListcritereComponent } from './critere/listcritere/listcritere.component';
import { critereComponent } from './critere/critere.component';


import { AdddocumentComponent } from './document/adddocument/adddocument.component';
import { ListdocumentComponent } from './document/listdocument/listdocument.component';
import { documentComponent } from './document/document.component';

import { AdddomaineComponent } from './domaine/adddomaine/adddomaine.component';
import { ListdomaineComponent } from './domaine/listdomaine/listdomaine.component';
import { domaineComponent } from './domaine/domaine.component';


import { AddprofilComponent } from './profil/addprofil/addprofil.component';
import { ListprofilComponent } from './profil/listprofil/listprofil.component';
import { profilComponent } from './profil/profil.component';


import { AddvalideurComponent } from './valideur/addvalideur/addvalideur.component';
import { ListvalideurComponent } from './valideur/listvalideur/listvalideur.component';
import { valideurComponent } from './valideur/valideur.component';

import { AddcreateurComponent } from './createur/addcreateur/addcreateur.component';
import { ListcreateurComponent } from './createur/listcreateur/listcreateur.component';
import { createurComponent } from './createur/createur.component';

import { AdminComponent } from './admin/admin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';
import { ValComponent } from './val/val.component';
import { AdmComponent } from './adm/adm.component';
import { UtilComponent } from './util/util.component';
import { HeaderComponent } from './header/header.component';
import { UpdatechecklistComponent } from './checklist/updatechecklist/updatechecklist.component';
import { UpdatecritereComponent } from './critere/updatecritere/updatecritere.component';
import { UploaderComponent } from './uploader/uploader.component';
//import { MenuComponent } from './menu/menu.component';
import { AngularFileUploaderModule } from "angular-file-uploader";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AddchecklistComponent,
    ListchecklistComponent,
	checklistComponent,
    AddcritereComponent,
    ListcritereComponent,
    critereComponent,
    AdddocumentComponent,
    ListdocumentComponent,
    documentComponent,
    AdddomaineComponent,
    ListdomaineComponent,
    domaineComponent,
    AddprofilComponent,
    ListprofilComponent,
    profilComponent,
    AddvalideurComponent,
    ListvalideurComponent,
    valideurComponent,
    AddcreateurComponent,
    ListcreateurComponent,
    createurComponent,
    AdminComponent,
    MenuComponent,
    ValComponent,
    AdmComponent,
    UtilComponent,
    HeaderComponent,
    UpdatechecklistComponent,
    UpdatecritereComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() ,// ToastrModul
    AngularFileUploaderModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
