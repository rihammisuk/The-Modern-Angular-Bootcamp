import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'What is a dog?',
      content: 'A dog is a type of domesticated animal.',
    },
    {
      title: 'What kinds of dogs are there?',
      content:
        'There are many breeds of dogs. Each breed varies in size and temperament.',
    },
    {
      title: 'What color is that Cat?',
      content: 'The cat is an orange color.',
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
