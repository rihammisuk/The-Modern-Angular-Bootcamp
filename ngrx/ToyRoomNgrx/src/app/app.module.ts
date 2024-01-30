import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToyRoomComponent } from './toy-room/toy-room.component';
import { StoreModule } from '@ngrx/store';
import { toyReducer } from './toy.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, ToyRoomComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ toys: toyReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
