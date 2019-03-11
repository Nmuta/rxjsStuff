import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component'; 
import { ObserveyComponent } from './observey/observey.component'; 
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { TimerComponent } from './timer/timer.component';


const routes: Routes = [
    {path: 'counter', component: CounterComponent},
    {path: 'observey', component: ObserveyComponent},
    {path: 'mergemap', component: MergemapComponent},
    {path: 'switchmap', component: SwitchmapComponent},
    {path: 'timer', component: TimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
