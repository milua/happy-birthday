import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgMaterialModule} from '../ng-material/ng-material.module';
import {StoryComponent} from './story/story.component';
import {HeaderComponent} from './header/header.component';
import {InventoryComponent} from './inventory/inventory.component';
import {DialogComponent} from './dialog/dialog.component';
import {ControlService} from './control/control.service';
import { InteractionModalComponent } from './interaction-modal/interaction-modal.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    HeaderComponent,
    InventoryComponent,
    DialogComponent,
    InteractionModalComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule
  ],
  providers: [
    ControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
