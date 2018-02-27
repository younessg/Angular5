import { Component, OnInit } from '@angular/core';
import { SeniorsService } from '../services/seniors.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component.one.html',
  styleUrls: ['./component.one.css']
})
export class ComponentOne implements OnInit {

  private senior: string;
  private dynamicSenior: string;

  constructor(private seniorsService: SeniorsService) { }

  ngOnInit() {
    this.seniorsService.seniorAsObservable.subscribe(senior => this.senior = senior);
  }

  private changeSenior(): void {
    this.seniorsService.updateSenior(this.dynamicSenior);
  }

}
