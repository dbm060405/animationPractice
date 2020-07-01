import {Component, Input, OnInit} from '@angular/core';
import {Reward} from '../reward';

@Component({
  selector: 'app-reward-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  animations: []
})
export class TicketComponent implements OnInit {
  @Input() reward: Reward;
  @Input() available: boolean;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
