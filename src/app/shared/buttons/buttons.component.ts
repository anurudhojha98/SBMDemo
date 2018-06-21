import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button>
  <mat-icon>face</mat-icon>
    Click me!
</button>
<mat-checkbox>Check me!</mat-checkbox>
<div class="flex-container">
   <div class="flex-item">1</div>
   <div class="flex-item">2</div>
   <div class="flex-item">3</div>
   <div class="flex-item">4</div>
   <div class="flex-item">5</div>
   <div class="flex-item">6</div>
</div>
  `,
  styles: [".flex-container{display:flex}"]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
