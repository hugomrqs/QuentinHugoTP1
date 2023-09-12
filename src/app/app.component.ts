import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuentinHugoTP1';
  newColor = 'black';
  colors : string[] = ['orange','green', 'blue','yellow'];
  public changeBackground(newitem :string){
    this.newColor = newitem;
    }
  }
