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

  constructor(private lotteryService: LotteryService) {this.createForm(); }

  ngOnInit() {
  }
// Insert Number in Array
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
