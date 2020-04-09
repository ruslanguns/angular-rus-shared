import { Injectable } from '@angular/core';

@Injectable()
export class RusSharedService {

  constructor() { }

  public sayHello(message: string): string {
    return `From Library: ${message}`;
  }
}
