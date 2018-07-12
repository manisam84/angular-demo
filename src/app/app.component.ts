import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
       <h1>Text ({{textValue}})</h1>
       <input #textbox type="text" [(ngModel)]="textValue" required>
       <button (click)="textValue=''">Clear</button>

       <h2>Template Reference Variable</h2>
       Type: '{{textbox.type}}', required: '{{textbox.hasAttribute('required')}}',
       upper: '{{textbox.value.toUpperCase()}}'

       <h2>Log <button (click)="log=''">Clear</button></h2>
       <pre>{{log}}</pre>`,
//  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  textValue = 'initial value';

}
