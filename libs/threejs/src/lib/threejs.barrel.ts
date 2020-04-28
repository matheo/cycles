import { CommonModule } from '@angular/common';
import { CanvasComponent } from './containers';
import { EngineService } from './services';

export const modules = [
  CommonModule,
];

export const providers = [
  EngineService,
];

export const exports = [
  CanvasComponent,
];

export const components = [
  ...exports,
];
