import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AddcritereComponent } from './critere/addcritere/addcritere.component';
import { MenuComponent } from './menu/menu.component';
import { ValComponent } from './val/val.component';
import { AdmComponent } from './adm/adm.component';
import { UtilComponent } from './util/util.component';
import { AddchecklistComponent } from './checklist/addchecklist/addchecklist.component';
import { ListchecklistComponent } from './checklist/listchecklist/listchecklist.component';
import { UpdatechecklistComponent } from './checklist/updatechecklist/updatechecklist.component';
import { ListcritereComponent } from './critere/listcritere/listcritere.component';
import { UpdatecritereComponent } from './critere/updatecritere/updatecritere.component';
import { ListdomaineComponent } from './domaine/listdomaine/listdomaine.component';
import { UploaderComponent } from './uploader/uploader.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'ListChek',
        component: ListchecklistComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
  
 
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
        
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
      },
    {
        path: 'val',
        component: ValComponent
    },
    {
        path: 'adm',
        component: AdmComponent
    },
    {
        path: 'lstdom',
        component: ListdomaineComponent
    },
    {
        path: 'util',
        component: UtilComponent
     },
     {
        path: 'addch',
        component: AddchecklistComponent
     },
    {
        path: 'addcritere',
        component: AddcritereComponent
    },
    {
        path: 'updloader',
        component: UploaderComponent
    },
    {
        path: 'Listcri',
        component: ListcritereComponent
    },
    { path: 'update', component: UpdatechecklistComponent },
    { path: 'employees', component: ListcritereComponent },
    { path: 'updates', component: UpdatecritereComponent },
    { path: 'listchecklist', component: ListchecklistComponent },



   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
