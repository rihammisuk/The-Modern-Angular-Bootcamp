import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItemIdex = 0;

  constructor() {}
  ngOnInit(): void {}

  onClick(index: number) {
    if (index === this.openedItemIdex) {
      this.openedItemIdex = -1;
    } else {
      this.openedItemIdex = index;
    }
  }
}
