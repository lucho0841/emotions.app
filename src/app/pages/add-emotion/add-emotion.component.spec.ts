import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmotionComponent } from './add-emotion.component';

describe('AddEmotionComponent', () => {
  let component: AddEmotionComponent;
  let fixture: ComponentFixture<AddEmotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
