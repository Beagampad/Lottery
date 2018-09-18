import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  lowlim = 1;
  uplim = 10;
  numbers: number[] = [];
  constructor() { }

  getNumber(): Observable<number> {

    console.log('hola2');

    const range = this.uplim - this.lowlim;
    const result = Math.floor(Math.random()*range) + this.lowlim;
    console.log(result);
    return  of(result);
  }

  insertNumber(value: number): Observable<any> {

    // const numbers: number[] = 'Widget ' + this.numbers.length;
    if (this.numbers.length < 8) {

      this.numbers.push(value);
      return of(this.numbers);
    }

  }
  getUserNumber(): Observable<any> {

    console.log(this.numbers);
     return of(this.numbers);
  }
}
