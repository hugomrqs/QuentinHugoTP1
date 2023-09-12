import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuentinHugoTP1';
  newColor = 'black';
  public changeBackground(newitem :string){
    this.newColor = newitem;
    }
  }
