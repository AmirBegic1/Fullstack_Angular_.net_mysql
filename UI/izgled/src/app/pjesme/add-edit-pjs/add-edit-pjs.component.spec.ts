import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPjsComponent } from './add-edit-pjs.component';

describe('AddEditPjsComponent', () => {
  let component: AddEditPjsComponent;
  let fixture: ComponentFixture<AddEditPjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
