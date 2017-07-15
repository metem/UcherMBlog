import { TestBed, inject } from '@angular/core/testing';

import { ArticlesRepositoryService } from './articles-repository.service';

describe('ArticlesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesRepositoryService]
    });
  });

  it('should be created', inject([ArticlesRepositoryService], (service: ArticlesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
