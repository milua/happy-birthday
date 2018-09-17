import {Component} from '@angular/core';
import {ImagePath} from './image-path';
import {ControlService} from '../control/control.service';
import {MatSnackBar} from '@angular/material';
import {MapService} from '../map/map.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  public state = 0;
  private readonly PREFIX = './assets/';
  public imgPath = '';
  public interactionActive = false;

  public kitchenClueOne = false;
  public kitchenClueTwo = false;
  public livingClueOne = false;
  public livingClueTwo = false;
  public bathroomClueOne = false;
  public bathroomClueTwo = false;

  private i = 0;

  constructor(private controlService: ControlService, public snackBar: MatSnackBar, private mapService: MapService) {
    this.imgPath = this.PREFIX + ImagePath.paths.get(0);

    this.controlService.onSceneChanged.subscribe(state => {
      this.state = state;
      this.loadScene(state);
      this.setInteractionState(state);
    });
  }

  public next() {
    if (this.state >= 10) {
      return;
    }
    this.controlService.next();
  }

  public backToMap() {
    this.controlService.goto(10);
  }

  private loadScene(state: number) {
    if (!ImagePath.paths.get(state)) {
      return;
    }
    this.imgPath = this.PREFIX + ImagePath.paths.get(state);
  }

  private setInteractionState(state: number) {
    switch (state) {
      case 3:
        this.interactionActive = true;
        break;
      default:
        this.interactionActive = false;
    }
  }

  public activateClue(clue: boolean) {
    if (clue === true) {
      return;
    } else {
      this.mapService.loadCluePostfix(this.i);
      this.i++;
    }
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-style']
    });
  }

}
