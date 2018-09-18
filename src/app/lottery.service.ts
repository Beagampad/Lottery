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

  // Get random number
  getNumber(): Observable<number> {

    const range = this.uplim - this.lowlim;
    const result = Math.floor(Math.random()*range) + this.lowlim;
    return  of(result);
  }
// insert number in array
  insertNumber(value: number): Observable<any> {

    if (this.numbers.length < 8) {
      this.numbers.push(value);
      return of(this.numbers);
    }
  }
  // Get numbers chosen by user
  getUserNumber(): Observable<any> {

     return of(this.numbers);
  }
// Bet
  calcBet(count, bet): Observable<any>{
   const result = count * bet;
    return of(result);
  }
}
