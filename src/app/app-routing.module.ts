// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'app',
          loadChildren: './app-modules/app-modules.module#AppModulesModule',
        //   data: { preload: true }
        }
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
