import { TestBed } from '@angular/core/testing';

import { PropietarioInventarioService } from './propietario-inventario.service';

describe('PropietarioInventarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropietarioInventarioService = TestBed.get(PropietarioInventarioService);
    expect(service).toBeTruthy();
  });
});
