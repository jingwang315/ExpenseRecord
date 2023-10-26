import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordPageComponent } from './expense-record-page.component';

describe('ExpenseRecordPageComponent', () => {
  let component: ExpenseRecordPageComponent;
  let fixture: ComponentFixture<ExpenseRecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
