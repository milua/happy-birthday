import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatRadioModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule

  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule

  ]
})
export class NgMaterialModule {
}
