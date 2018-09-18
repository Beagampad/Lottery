import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  numbers: number[] = [];
  angForm: FormGroup;
  toppings = new FormControl();
  toppingList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private lotteryService: LotteryService) {this.createForm(); }

  ngOnInit() {
  }

  insertNumber(value): void {
    console.log('insertNumber', value);
    this.lotteryService.insertNumber(value)
        .subscribe(numbers => this.numbers = numbers);
  }

  createForm() {

    this.angForm = new FormGroup({
      btn: new FormControl()
   });
  }

}
