import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeTheDataComponent } from './show-me-the-data.component';

describe('ShowMeTheDataComponent', () => {
  let component: ShowMeTheDataComponent;
  let fixture: ComponentFixture<ShowMeTheDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMeTheDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeTheDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
