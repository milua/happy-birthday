import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class NgMaterialModule {
}
