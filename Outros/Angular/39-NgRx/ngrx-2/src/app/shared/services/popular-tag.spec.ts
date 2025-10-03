import { TestBed } from '@angular/core/testing';

import { PopularTag } from './popular-tag';

describe('PopularTag', () => {
  let service: PopularTag;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTag);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
