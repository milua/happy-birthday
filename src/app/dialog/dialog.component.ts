import {Component} from '@angular/core';
import {Dialog} from './dialog';
import {ControlService} from '../control/control.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public firstLine = '';
  public secondLine = '';
  public thirdLine = '';

  constructor(private controlService: ControlService) {
    this.firstLine = Dialog.sceneOne.get(this.controlService.state)[0];
    this.secondLine = Dialog.sceneOne.get(this.controlService.state)[1];
    this.thirdLine = Dialog.sceneOne.get(this.controlService.state)[2];
  }

  public nextDialog() {
    this.controlService.next();
  }
}
