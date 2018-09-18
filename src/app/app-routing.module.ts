import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';


const routes: Routes = [
  { path: '', component: BallSelectorComponent },
  { path: '', component: BetSlipComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
