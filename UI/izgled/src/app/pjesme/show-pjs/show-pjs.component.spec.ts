import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPjsComponent } from './show-pjs.component';

describe('ShowPjsComponent', () => {
  let component: ShowPjsComponent;
  let fixture: ComponentFixture<ShowPjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
