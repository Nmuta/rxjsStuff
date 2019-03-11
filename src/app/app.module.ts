import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CondorComponent } from './condor/condor.component';
import { FalconComponent } from './falcon/falcon.component';
import { CounterComponent } from './counter/counter.component';
import { ObserveyComponent } from './observey/observey.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { TimerComponent } from './timer/timer.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CondorComponent,
    FalconComponent,
    CounterComponent,
    ObserveyComponent,
    MergemapComponent,
    SwitchmapComponent,
    NavComponent,
    TimerComponent,
    ForkjoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
