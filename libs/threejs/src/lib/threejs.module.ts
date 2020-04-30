import { NgModule } from '@angular/core';
import * as fromBarrel from './threejs.barrel';

@NgModule({
  imports: fromBarrel.modules,
  providers: fromBarrel.providers,
  declarations: fromBarrel.components,
  exports: fromBarrel.exported,
})
export class ThreejsModule {}
