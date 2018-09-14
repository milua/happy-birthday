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


  constructor(private controlService: ControlService) {
    this.imgPath = this.PREFIX + ImagePath.paths.get(0);

    this.controlService.onSceneChanged.subscribe(state => this.loadScene(state));
  }

  private loadScene(state: number) {
    this.imgPath = this.PREFIX + ImagePath.paths.get(state);
  }
}
