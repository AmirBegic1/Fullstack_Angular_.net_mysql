import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodjacComponent } from './izvodjac.component';

describe('IzvodjacComponent', () => {
  let component: IzvodjacComponent;
  let fixture: ComponentFixture<IzvodjacComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ IzvodjacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodjacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
