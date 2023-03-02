import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <div style="text-align: center;
    padding-top: 100px;
    height: 100px;
    background: aliceblue;
    border-radius: 5px;">
      <input id="intervalInput" [(ngModel)]="intervalValue" (ngModelChange)="onIntervalChange()">
      <button id="intervalSetButton" (click)="setInterval()">Set Interval</button>
    </div>
  `,
})
export class CounterComponent implements OnInit {

  @Input() message: string = '';
  @Output() tick: EventEmitter<string> = new EventEmitter();

  intervalValue!: number;
  intervalId: any = null;

  ngOnInit() {
  }

  onIntervalChange() {
    this.clearTimer();
  }

  setInterval() {
    this.clearTimer();
    this.startTimer();
  }

  startTimer() {
    if(this.intervalValue) {
      this.intervalId = setInterval(() => {
        this.tick.emit(this.message);
      }, this.intervalValue);
    }
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  // This is useful to clear the timer when leaving the component by charging another comp or changing the route
  ngOnDestroy() {
    this.clearTimer();
  }
}