import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddEditIzvComponent } from './add-edit-izv.component';
schema:[CUSTOM_ELEMENTS_SCHEMA];

describe('AddEditIzvComponent', () => {
  let component: AddEditIzvComponent;
  let fixture: ComponentFixture<AddEditIzvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIzvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIzvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
