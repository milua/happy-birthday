import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
  public goalText = 'https://goo.gl/';
  private postfix = 'xYUJ2E';

  public constructor() {
  }

  public loadCluePostfix() {
    if (this.postfix.length === 0) {
      return;
    }
    this.goalText += this.postfix.charAt(0);
    this.postfix.slice(1, this.postfix.length - 1);
  }
}
