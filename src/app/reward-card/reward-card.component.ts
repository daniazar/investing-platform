import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss']
})
export class RewardCardComponent implements OnInit {
  @Input() project: any;

  constructor() { }

  ngOnInit() {
  }

  switchHover( item, hover: boolean){
    console.log(item, hover);
    item.hover = hover;
  }

}
