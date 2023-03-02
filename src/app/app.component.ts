import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'coding-game';
  public tickOutput!: string

  handleTick(val: any) {
    this.tickOutput = '';
    this.tickOutput = val;
    console.log('-----TIK-------');
    console.log(val);
  }
}
