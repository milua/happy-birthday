import {Component, OnInit} from '@angular/core';
import {ImagePath} from './image-path';
import {ControlService} from '../control/control.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  private readonly PREFIX = './assets/';
  public imgPath = '';

  private assetMap = new Map<number, string>();

  constructor(private controlService: ControlService) {
    this.imgPath = this.PREFIX + ImagePath.paths.get(this.controlService.state);
    console.log(ImagePath.paths.get(this.controlService.state));
  }

  ngOnInit() {
  }

  private loadScene(index: number) {
    this.imgPath = this.assetMap.get(index);
  }
}
