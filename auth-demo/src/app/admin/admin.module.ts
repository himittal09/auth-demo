import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';



import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule
  ]
})
export class AdminModule { }
