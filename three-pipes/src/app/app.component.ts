import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onMilesChange(event: any) {
    let value = event.target.value;
    this.miles = parseFloat(value);
  }

  onHeightChange(event: any) {
    let value = event.target.value;
    this.height = parseFloat(value);
  }

  onNameChange(event: any) {
    let value = event.target.value;
    this.name = value;
  }

  onDateChange(event: any) {
    let value = event.target.value;
    this.date = value;
  }

  onAmountChange(event: any) {
    let value = event.target.value;
    this.amount = value;
  }
}
