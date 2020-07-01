import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardTicketComponent } from './reward-ticket.component';

describe('RewardTicketComponent', () => {
  let component: RewardTicketComponent;
  let fixture: ComponentFixture<RewardTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
