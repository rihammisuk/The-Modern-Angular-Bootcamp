import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Forest',
      url: 'https://plus.unsplash.com/premium_photo-1675355675451-d49606cb8e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Forest',
      url: 'https://plus.unsplash.com/premium_photo-1675355675451-d49606cb8e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Forest',
      url: 'https://plus.unsplash.com/premium_photo-1675355675451-d49606cb8e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Forest',
      url: 'https://plus.unsplash.com/premium_photo-1675355675451-d49606cb8e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww',
    },
    {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNpdHl8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFNub3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
