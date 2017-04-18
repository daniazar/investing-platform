import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'invest-card',
  templateUrl: './invest-card.component.html',
  styleUrls: ['./invest-card.component.scss']
})
export class InvestCardComponent implements OnInit {
  @Input() item: any;


  constructor() {
   }

  ngOnInit() {
        //console.log(this.item);
  }


  calculateAmount( item){
    var returnValue = 100;
    if (item.curAmount < item.maxAmount)
      returnValue = item.curAmount / item.maxAmount * 100;
    return returnValue;
  }  

}
