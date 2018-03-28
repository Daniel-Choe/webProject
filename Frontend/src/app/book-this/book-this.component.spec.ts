import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookThisComponent } from './book-this.component';

describe('BookThisComponent', () => {
  let component: BookThisComponent;
  let fixture: ComponentFixture<BookThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookThisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
