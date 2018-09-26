import { TestBed, inject } from '@angular/core/testing';

import { ShopingListService } from './shoping-list.service';

describe('ShopingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopingListService]
    });
  });

  it('should be created', inject([ShopingListService], (service: ShopingListService) => {
    expect(service).toBeTruthy();
  }));
});
