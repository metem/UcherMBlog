import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRepositoryService } from './articles-repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ArticlesRepositoryService]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded.');
    }
  }
}
