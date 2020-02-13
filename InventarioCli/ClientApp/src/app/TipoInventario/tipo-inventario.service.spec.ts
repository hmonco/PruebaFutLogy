import { TestBed } from '@angular/core/testing';

import { TipoInventarioService } from './tipo-inventario.service';

describe('TipoInventarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoInventarioService = TestBed.get(TipoInventarioService);
    expect(service).toBeTruthy();
  });
});
