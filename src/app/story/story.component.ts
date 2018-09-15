import {Component} from '@angular/core';
import {ImagePath} from './image-path';
import {ControlService} from '../control/control.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {

  private readonly PREFIX = './assets/';
  public imgPath = '';
  public interactionActive = false;

  constructor(private controlService: ControlService) {
    this.imgPath = this.PREFIX + ImagePath.paths.get(0);

    this.controlService.onSceneChanged.subscribe(state => {
      this.loadScene(state);
      this.setInteractionState(state);
    });
  }

  public next() {
    this.controlService.next();
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
}
