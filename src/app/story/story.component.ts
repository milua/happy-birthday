import {Component} from '@angular/core';
import {ImagePath} from './image-path';
import {ControlService} from '../control/control.service';

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

  constructor(private controlService: ControlService) {
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

  activateClue(clue: boolean) {
    if (clue === true) {
      return;
    } else {
      // TODO
      console.log('activated');
    }
  }

}
