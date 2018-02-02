import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserInfoComponent } from './load-component/user-info/user-info.component';
import { UserInfoRoutingModule } from './user-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    NgbModule
  ],
  declarations: [LoginComponent, RegistrationComponent, ForgotPasswordComponent, UserInfoComponent]
})
export class UserInfoModule { }
