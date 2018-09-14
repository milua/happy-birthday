import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatRadioModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class NgMaterialModule {
}
