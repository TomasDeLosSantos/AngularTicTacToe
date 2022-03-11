import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="x" *ngIf="value == 'X'">{{ value }}</button>
    <button class="o" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    ` 
      button{
        width: 100%;
        height: 100%;
        font-size: 8rem;
        background-color: transparent;
        border: solid 1px black;
      }
      .x{
        background-color: #00B295;
      }
      .o{
        background-color: #AB2346;
      }
    `
  ]
})
export class SquareComponent {
  @Input() value:  'X' | 'O' | undefined;
}
