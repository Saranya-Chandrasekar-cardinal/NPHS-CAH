import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleDashboardComponent } from './wholesale-dashboard.component';

describe('WholesaleDashboardComponent', () => {
  let component: WholesaleDashboardComponent;
  let fixture: ComponentFixture<WholesaleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholesaleDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesaleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
