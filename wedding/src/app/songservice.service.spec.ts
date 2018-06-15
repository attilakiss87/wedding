import { TestBed, inject } from '@angular/core/testing';

import { SongserviceService } from './songservice.service';

describe('SongserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongserviceService]
    });
  });

  it('should be created', inject([SongserviceService], (service: SongserviceService) => {
    expect(service).toBeTruthy();
  }));
});
