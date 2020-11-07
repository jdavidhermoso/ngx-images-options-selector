import { TestBed } from '@angular/core/testing';

import { NgxImagesOptionsSelectorService } from './ngx-images-options-selector.service';

describe('NgxImagesOptionsSelectorService', () => {
  let service: NgxImagesOptionsSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImagesOptionsSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
