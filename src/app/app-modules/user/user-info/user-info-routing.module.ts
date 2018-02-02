import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import {
  ForgotPasswordComponent,
  LoginComponent,
  RegistrationComponent
} from './components';
import { UserInfoComponent } from './load-component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  exports: [RouterModule]
})
export class UserInfoRoutingModule {}
