import { TestBed, inject } from '@angular/core/testing';

import { ComunicadorService } from './comunicador.service';

describe('ComunicadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicadorService]
    });
  });

  it('should be created', inject([ComunicadorService], (service: ComunicadorService) => {
    expect(service).toBeTruthy();
  }));
});
