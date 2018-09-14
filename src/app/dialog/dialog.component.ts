import {Component} from '@angular/core';

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
    this.firstLine = 'Uhuhuhu.........uhuhuhu..........uhuhuhu......';
  }

  public nextDialog() {
    console.log('nächste');
  }
}
