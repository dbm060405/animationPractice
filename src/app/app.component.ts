import {Component} from '@angular/core';
import {Reward} from './reward';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sliding', [
      //#region true/false
      // TODO: working on the sliding
      transition('available => future', [
        // query(':enter, :leave', style({position: 'fixed'}), {optional: true}),
        group([
          query(':leave', [
            style({transform: 'translateX(0)'}),
            animate('2s', style({transform: 'translateX(-200px)'}))], {optional: true}
          ),
          query(':enter', [
            style({transform: 'translateX(200px)'}),
            animate('2s', style({transform: 'translateX(0)'}))], {optional: true}
          ),
        ])
      ]),
      transition('future => available', [
        // query(':enter, :leave', style({position: 'fixed'}), {optional: true}),
        group([
          query(':leave', [
            style({transform: 'translateX(0)'}),
            animate('2s', style({transform: 'translateX(200px)'}))], {optional: true}
          ),
          query(':enter', [
            style({transform: 'translateX(-200px)'}),
            animate('2s', style({transform: 'translateX(0)'}))], {optional: true}
          ),
        ])
      ])
      //#endregion
    ])
  ]
})
export class AppComponent {
  title = 'Playing with animation';
  activeRewards = 'available';
  rewards: Array<Reward>;
  active: Array<Reward> = [
    {
      title: '$10 Current',
      description: 'Currently available reward',
      category: 'app',
      legal: 'Much legal.',
      startDate: '2020-06-29',
      endDate: '2020-07-03',
      code: '101339000000000000000000000012',
      promo: '10133'
    },
    {
      title: '$15% Current',
      description: 'Currently available reward',
      category: 'app',
      legal: 'Much legal.',
      startDate: '2020-06-29',
      endDate: '2020-07-03',
      code: '101339000000000000000000000012',
      promo: '10133'
    }
  ];
  // future: Array<Reward> = [
  //   {
  //     title: '$10 Future',
  //     description: 'Future reward',
  //     category: 'app',
  //     legal: 'Much legal.',
  //     startDate: '2020-07-03',
  //     endDate: '2020-07-30',
  //     code: '101339000000000000000000000012',
  //     promo: '10133'
  //   },
  //   {
  //     title: '$15% Future',
  //     description: 'Future reward',
  //     category: 'app',
  //     legal: 'Much legal.',
  //     startDate: '2020-07-03',
  //     endDate: '2020-07-30',
  //     code: '101339000000000000000000000012',
  //     promo: '10133'
  //   }
  // ];
  future: Array<Reward> = [];

  constructor() {
    this.rewards = this.active;
  }

  toggleList(type: string) {
    if (type === 'available') {
      this.activeRewards = type;
      this.rewards = this.active;
    } else {
      this.activeRewards = type;
      this.rewards = this.future;
    }
  }
}
