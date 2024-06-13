import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadDeshboardComponent } from './audit-head-deshboard.component';

describe('AuditHeadDeshboardComponent', () => {
  let component: AuditHeadDeshboardComponent;
  let fixture: ComponentFixture<AuditHeadDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditHeadDeshboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditHeadDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
