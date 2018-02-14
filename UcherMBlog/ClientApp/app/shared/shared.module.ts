import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugFilter } from './filters/slug';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SlugFilter],
  exports: [SlugFilter],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SlugFilter]
    }
  }
}
