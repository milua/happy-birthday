import { NgModule } from '@angular/core';
import {MatButtonModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ]
})
export class NgMaterialModule { }
