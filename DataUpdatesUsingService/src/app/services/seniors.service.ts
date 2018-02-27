import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SeniorsService {

  private senior = new BehaviorSubject<string>('Emma');
  public seniorAsObservable = this.senior.asObservable();

  constructor() { }

  public updateSenior(senior) {
    this.senior.next(senior);
  }

}
