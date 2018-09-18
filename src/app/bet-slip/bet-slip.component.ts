import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {


  number = 0;
  usernumbers: number[] = [];
  angForm: FormGroup;
  money = 0;
  lost = '';
  win = '';

  constructor(private lotteryService: LotteryService) {this.createForm(); }

  ngOnInit() {
    this.getUserNumber();
  }
 // Get a random number
  getNumber(): void {
    this.lotteryService.getNumber()
        .subscribe(number => this.number = number);

   if (this.findNumber() == null) {
     this.lost = 'You loose :(';
   }else{
    this.win = 'You win!';
   }
  }
// Numbers chosen by user
  getUserNumber(): void {
    console.log('getUserNumber');
    this.lotteryService.getUserNumber()
        .subscribe(usernumbers => this.usernumbers = usernumbers);
  }
// Win or loose
  findNumber() {
   const number = this.number;
   const usernumbers = this.usernumbers;
    return (usernumbers.find(x => x === number));

  }
// Bet
  CalcBet(count: number, bet: number){
   
    this.lotteryService.calcBet(count, bet)
        .subscribe(money => this.money = money);
  }

  createForm() {

    this.angForm = new FormGroup({
      bet: new FormControl(),
      xbet: new FormControl()
   });
  }
}
