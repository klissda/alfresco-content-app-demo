import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiComponent } from './activiti.component';

describe('ActivitiComponent', () => {
  let component: ActivitiComponent;
  let fixture: ComponentFixture<ActivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
