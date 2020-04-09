import { NgModule, ModuleWithProviders } from '@angular/core';
import { RusSharedComponent } from './rus-shared.component';
import { RusSharedService } from './rus-shared.service';



@NgModule({
  declarations: [RusSharedComponent],
  providers: [
    RusSharedService
  ],
  exports: [RusSharedComponent]
})
export class RusSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RusSharedModule,
      providers: [
        RusSharedService
      ]
    }
  }
}
