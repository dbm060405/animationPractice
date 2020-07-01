import {Component, Input, OnInit} from '@angular/core';
import {Reward} from '../reward';

@Component({
  selector: 'app-reward-ticket',
  templateUrl: './reward-ticket.component.html',
  styleUrls: ['./reward-ticket.component.scss'],
  animations: []
})
export class RewardTicketComponent implements OnInit {
  @Input() reward: Reward;
  @Input() available: boolean;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
