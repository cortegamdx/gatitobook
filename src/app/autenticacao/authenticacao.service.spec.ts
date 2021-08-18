import { TestBed } from '@angular/core/testing';

import { AuthenticacaoService } from './authenticacao.service';

describe('AuthenticacaoService', () => {
  let service: AuthenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
