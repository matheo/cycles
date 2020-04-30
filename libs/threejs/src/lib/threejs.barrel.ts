import { CommonModule } from '@angular/common';
import { CanvasComponent } from './containers';
import { EngineService } from './services';

export const modules = [
  CommonModule,
];

export const providers = [
  EngineService,
];

export const exported = [
  CanvasComponent,
];

export const components = [
  ...exported,
];
