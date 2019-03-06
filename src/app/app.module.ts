import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CondorComponent } from './condor/condor.component';
import { FalconComponent } from './falcon/falcon.component';


@NgModule({
  declarations: [
    AppComponent,
    CondorComponent,
    FalconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
