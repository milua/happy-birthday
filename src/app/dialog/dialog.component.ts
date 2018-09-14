import {Component} from '@angular/core';
import {Dialog} from './dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public firstLine = '';
  public secondLine = '';
  public thirdLine = '';

  constructor() {
    this.firstLine = Dialog.sceneOne.one[0];
    this.secondLine = Dialog.sceneOne.one[1];
    this.thirdLine = Dialog.sceneOne.one[2];
  }

  public nextDialog() {
  }
}
