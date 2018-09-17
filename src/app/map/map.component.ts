import {Component} from '@angular/core';
import {ControlService} from '../control/control.service';
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(private controlService: ControlService, private mapService: MapService) {
  }

  public get goalText(): string {
    return this.mapService.goalText;
  }

  public onKitchenSelected() {
    this.controlService.goto(11);
  }

  public onRoomSelected() {
    this.controlService.goto(12);
  }

  public onBathroomSelected() {
    this.controlService.goto(13);
  }

  public onLivingRoomSelected() {
    this.controlService.goto(14);
  }
}
