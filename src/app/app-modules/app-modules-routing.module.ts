// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Internal imports
import { AppModuleComponent } from './components/';

/**
 * App modules routing
 * @export
 * @class AppModuleRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppModuleComponent,
        children: [
          {
            path: 'user',
            loadChildren: './user/user.module#UserModule',
          //   data: { preload: true }
          }
          ,
          // TODO: To be integrated later
          // {
          //   path: 'standalone',
          //   loadChildren: './standalone/standalone.module#StandaloneModule',
          //   data: { preload: true }
          // }
        ]
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppModuleRoutingModule {
}
