import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThreejsModule } from '@cycles/threejs';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ThreejsModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
