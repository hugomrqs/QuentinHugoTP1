import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuentinHugoTP1';
  constructor() {}
  parentMessage = "Message from the parent to the child";
}
