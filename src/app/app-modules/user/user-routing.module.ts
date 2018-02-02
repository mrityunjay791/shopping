// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Internal imports
import { UserComponent } from './component';

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
        component: UserComponent,
        children: [
          {
            path: 'user-info',
            loadChildren: './user-info/user-info.module#UserInfoModule',
            data: { preload: true }
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
export class UserRoutingModule {
}
