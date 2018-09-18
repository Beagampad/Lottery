import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  number = 0;
  usernumbers: number[] = [];

  constructor(private lotteryService: LotteryService) { }

  ngOnInit() {
    this.getUserNumber();
  }

  getNumber(): void {
    console.log('getNumber');
    this.lotteryService.getNumber()
        .subscribe(number => this.number = number);

   if (this.findNumber()=== 'undefined') {
     console.log('has perdido');
   }
  }

  getUserNumber(): void {
    console.log('getUserNumber');
    this.lotteryService.getUserNumber()
        .subscribe(usernumbers => this.usernumbers = usernumbers);
  }

  findNumber() {
   const number = this.number;
   const usernumbers = this.usernumbers;

   console.log(usernumbers.find(x => x === number));

    return (usernumbers.find(x => x === number));

  }

}
