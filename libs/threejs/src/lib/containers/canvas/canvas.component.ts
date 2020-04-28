import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../../services';

@Component({
  selector: 'threejs-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {

  @ViewChild('renderer', {static: true})
  renderer: ElementRef<HTMLCanvasElement>;

  constructor(private engine: EngineService) {}

  ngOnInit(): void {
    this.engine.createScene(this.renderer);
    this.engine.animate();
  }
}
