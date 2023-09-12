import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Output()event =new EventEmitter
  public addEvent(value: string){
  this.event.emit(value)
  }

}
