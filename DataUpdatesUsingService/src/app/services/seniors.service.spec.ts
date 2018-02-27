import { TestBed, inject } from '@angular/core/testing';
import { SeniorsService } from './seniors.service';

describe('SeniorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeniorsService]
    });
  });

  it('should be created', inject([SeniorsService], (service: SeniorsService) => {
    expect(service).toBeTruthy();
  }));
});
