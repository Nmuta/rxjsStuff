import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CondorComponent } from './condor/condor.component';
import { FalconComponent } from './falcon/falcon.component';
import { MessageService }  from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    CondorComponent,
    FalconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
