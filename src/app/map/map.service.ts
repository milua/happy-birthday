import {Injectable} from '@angular/core';

@Injectable()
export class MapService {
  public goalText = 'https://goo.gl/';
  private postfix = 'xYUJ2E';

  public constructor() {
  }

  public loadCluePostfix(index: number) {
    if (index >= this.postfix.length) {
      return;
    }
    this.goalText += this.postfix.charAt(index);
  }
}
