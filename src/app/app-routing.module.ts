import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component'; 
import { ObserveyComponent } from './observey/observey.component'; 
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';


const routes: Routes = [
    {path: 'counter', component: CounterComponent},
    {path: 'observey', component: ObserveyComponent},
    {path: 'mergemap', component: MergemapComponent},
    {path: 'switchmap', component: SwitchmapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
