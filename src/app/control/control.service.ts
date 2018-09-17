import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ControlService {
  private static readonly FINAL_STATE = 10;

  private _state: number;

  public onSceneChanged: EventEmitter<number>;

  public constructor() {
    this.onSceneChanged = new EventEmitter<number>();
    this._state = 0;
  }

  public next() {
    if (this._state === ControlService.FINAL_STATE) {
      return;
    } else {
      this._state += 1;
    }
    this.onSceneChanged.emit(this._state);
  }

  public goto(state: number) {
    this._state = state;
    this.onSceneChanged.emit(this._state);
  }

  public back() {
    if (this._state === 0) {
      return;
    } else {
      this._state -= 1;
    }
    console.log(this._state);
    this.onSceneChanged.emit(this._state);
  }

}
