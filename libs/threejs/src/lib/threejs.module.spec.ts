import { TestBed, async } from '@angular/core/testing';
import { ThreejsModule } from './threejs.module';

describe('ThreejsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThreejsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ThreejsModule).toBeDefined();
  });
});
