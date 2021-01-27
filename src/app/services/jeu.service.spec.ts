import { TestBed, inject } from '@angular/core/testing';

import { JeuService } from './jeu.service';

describe('JeuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeuService]
    });
  });

  it('should be created', inject([JeuService], (service: JeuService) => {
    expect(service).toBeTruthy();
  }));
});
