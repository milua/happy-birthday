import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public imgPath = '';

  private assetMap = new Map<number, string>();

  constructor() {
    this.imgPath = './assets/00-guinea-pig.gif';
    this.assetMap.set(0, './assets/00-guinea-pig.gif');
  }

  ngOnInit() {
  }

  private loadScene(index: number) {
    this.imgPath = this.assetMap.get(index);
  }
}
