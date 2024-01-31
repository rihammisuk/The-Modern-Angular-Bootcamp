import { NgFor } from "@angular/common";
import { Component, computed, signal, effect } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => this.increment());
  }

  increment() {
    // We can get 3 types of method for signal
    // this.counter.set(1) ;
    // this.counter.update(x=>x);
    // this.counter.mutate(x=>x) ;

    // this.counter.update((oldCounter) => oldCounter + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push("INCREMENT"));
    // this.actions.push("INCREMENT");
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.mutate((oldActions) => oldActions.push("DECREMENT"));
    // this.actions.update((oldActions) => [...oldActions, "DECREMENT"]);// This is also possible
    // this.actions.push("DECREMENT");
  }
}
