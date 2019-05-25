import { TestBed } from '@angular/core/testing';

import { FirebaseProdService } from './firebase-prod.service';

describe('FirebaseProdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseProdService = TestBed.get(FirebaseProdService);
    expect(service).toBeTruthy();
  });
});
