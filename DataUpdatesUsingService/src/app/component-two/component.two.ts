import { Component, OnInit } from '@angular/core';
import { SeniorsService } from '../services/seniors.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component.two.html',
  styleUrls: ['./component.two.css']
})
export class ComponentTwo implements OnInit {

  private senior: string;

  constructor(private seniorsService: SeniorsService) { }

  ngOnInit() {
    this.seniorsService.seniorAsObservable.subscribe(senior => this.senior = senior);
  }

}
