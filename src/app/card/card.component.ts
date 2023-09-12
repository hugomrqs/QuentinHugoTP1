import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Output() event =new EventEmitter;
@Input() color : string[] = [];
  public addEvent(value: string){
    console.log('test');
  this.event.emit(value)
  }

}
