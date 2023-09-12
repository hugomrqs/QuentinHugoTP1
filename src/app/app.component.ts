import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title : string = 'QuentinHugoTP1';
  newBackgroundColor : string = '';
  colors : string[] = ['orange','green', 'blue','yellow'];
  
  public changeBackground(color : string){
    this.newBackgroundColor = color;
  }
}
