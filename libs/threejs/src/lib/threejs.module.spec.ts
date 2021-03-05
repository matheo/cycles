import { TestBed, waitForAsync } from '@angular/core/testing';
import { ThreejsModule } from './threejs.module';

describe('ThreejsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ThreejsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ThreejsModule).toBeDefined();
  });
});
