import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModuleComponent } from './components/app-module/app-module.component';

import { AppModuleRoutingModule } from './app-modules-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppModuleRoutingModule
  ],
  declarations: [AppModuleComponent]
})
export class AppModulesModule { }
