import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', children: [ {
        path: 'login',
        component: LoginComponent
    } 
        ]
    },
    {
        path: 'admin',
        children: [
            {
                path: 'login',
                component: AdminLoginComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
