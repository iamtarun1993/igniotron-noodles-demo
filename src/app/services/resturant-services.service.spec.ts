import { TestBed } from '@angular/core/testing';

import { ResturantServicesService } from './resturant-services.service';

describe('ResturantServicesService', () => {
  let service: ResturantServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
