import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityQuestionsComponent } from './add-security-questions.component';

describe('AddSecurityQuestionsComponent', () => {
  let component: AddSecurityQuestionsComponent;
  let fixture: ComponentFixture<AddSecurityQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSecurityQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecurityQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
