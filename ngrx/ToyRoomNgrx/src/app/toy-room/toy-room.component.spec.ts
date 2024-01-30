import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyRoomComponent } from './toy-room.component';

describe('ToyRoomComponent', () => {
  let component: ToyRoomComponent;
  let fixture: ComponentFixture<ToyRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToyRoomComponent]
    });
    fixture = TestBed.createComponent(ToyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
