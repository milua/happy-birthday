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

  public state = 0;

  constructor(private controlService: ControlService) {
    this.firstLine = Dialog.sceneOne.get(0)[0];
    this.secondLine = Dialog.sceneOne.get(0)[1];
    this.thirdLine = Dialog.sceneOne.get(0)[2];

    this.controlService.onSceneChanged.subscribe(state => this.loadDialog(state));
  }

  public loadDialog(state: number) {
    if (!Dialog.sceneOne.get(state)) {
      this.firstLine = '';
      this.secondLine = '';
      this.thirdLine = '';

      return;
    }
    this.state = state;

    this.firstLine = Dialog.sceneOne.get(state)[0];
    this.secondLine = Dialog.sceneOne.get(state)[1];
    this.thirdLine = Dialog.sceneOne.get(state)[2];
  }

  public forward() {
    this.controlService.next();
  }

  public back() {
    this.controlService.back();
  }
}
