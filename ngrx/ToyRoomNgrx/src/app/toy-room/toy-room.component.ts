// toy-room.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectToys } from '../toy.selectors';
import { Toy } from '../Toy';
import { addToy, removeToy } from '../toy.actions';

@Component({
  selector: 'app-toy-room',
  templateUrl: './toy-room.component.html',
  styleUrls: ['./toy-room.component.css'],
})
export class ToyRoomComponent implements OnInit {
  toys$: Observable<Toy[]>;

  constructor(private store: Store<{ toys: Toy[] }>) {
    this.toys$ = this.store.select(selectToys);
  }

  ngOnInit(): void {}

  addNewToy() {
    const newToy: Toy = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID for simplicity
      name: 'New Toy',
    };
    this.store.dispatch(addToy({ toy: newToy }));
  }

  removeToy(id: number) {
    this.store.dispatch(removeToy({ id }));
  }
}
