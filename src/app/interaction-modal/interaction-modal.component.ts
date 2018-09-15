import {Component} from '@angular/core';
import {ControlService} from '../control/control.service';

@Component({
  selector: 'app-interaction-modal',
  templateUrl: './interaction-modal.component.html',
  styleUrls: ['./interaction-modal.component.scss']
})
export class InteractionModalComponent {
  public valueSelected = false;

  constructor(private controlService: ControlService) {
  }

  public next() {
    this.controlService.next();
  }
}
