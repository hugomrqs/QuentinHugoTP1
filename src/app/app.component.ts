import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title : string = 'QuentinHugoTP1';
  public newBackgroundColor : string = '';
  public colors : string[] = ['orange','green', 'blue','yellow'];
  
  public changeBackground(color : string){
    this.newBackgroundColor = color;
  }
}
