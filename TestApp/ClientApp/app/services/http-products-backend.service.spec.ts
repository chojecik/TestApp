import { TestBed } from '@angular/core/testing';

import { HttpProductsBackendService } from './http-products-backend.service';

describe('HttpProductsBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpProductsBackendService = TestBed.get(HttpProductsBackendService);
    expect(service).toBeTruthy();
  });
});
