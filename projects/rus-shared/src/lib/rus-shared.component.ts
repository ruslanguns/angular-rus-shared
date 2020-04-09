import { Component, Input } from '@angular/core';
import { RusSharedService } from './rus-shared.service';

@Component({
  selector: 'lib-rus-shared',
  template: `
    <button type="button" (click)="sendMessage()">Di hola!</button>
    <br />
    {{ resultado }}
  `,
  styles: [
  ]
})
export class RusSharedComponent {
  @Input() text: string;
  resultado: string = '';

  constructor(private service: RusSharedService) { }

  sendMessage(): void {
    this.resultado = this.service.sayHello(this.text);
  }

}
