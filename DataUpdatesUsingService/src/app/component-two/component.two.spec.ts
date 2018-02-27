import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentTwo } from './component.two';

describe('TwoComponent', () => {
  let component: ComponentTwo;
  let fixture: ComponentFixture<ComponentTwo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTwo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
