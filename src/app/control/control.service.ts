import {Injectable} from '@angular/core';

@Injectable()
export class ControlService {
  private static readonly FINAL_STATE = 10;

  private _state: number;

  public constructor() {
    this._state = 0;
  }

  public get state() {
    return this._state;
  }

  public next() {
    if (this._state === ControlService.FINAL_STATE) {
      return;
    } else {
      this._state += 1;
    }
  }

  public back() {
    if (this._state === 0) {
      return;
    } else {
      this._state -= 1;
    }
  }
}
