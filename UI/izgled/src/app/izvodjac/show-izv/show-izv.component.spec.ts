import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIzvComponent } from './show-izv.component';


describe('ShowIzvComponent', () => {
  let component: ShowIzvComponent;
  let fixture: ComponentFixture<ShowIzvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIzvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIzvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
