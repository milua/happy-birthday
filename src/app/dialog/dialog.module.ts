import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgMaterialModule} from '../../ng-material/ng-material.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
  ],
  exports: [
    NgMaterialModule
  ]
})
export class DialogModule {
}
