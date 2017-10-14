import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Custom Directive</h1>
      <p myHighlight>HighLight Me !</p>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
