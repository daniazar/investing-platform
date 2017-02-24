import { Component, OnInit, Input } from '@angular/core';
import { Reward, Project } from '../../objects/iproject';

@Component({
  selector: 'app-project-form-page',
  templateUrl: './project-form-page.component.html',
  styleUrls: ['./project-form-page.component.scss']
})
export class ProjectFormPageComponent implements OnInit {
  @Input()  project: Project; 

  constructor() { }

  ngOnInit() {
    if( this.project === null || this.project === undefined){
      this.project = new Project(null,'','','',0,0,[],null,'','','','','' );
    }
  }

  addReward(){
    this.project.rewards.push(new Reward(null, null, null, null, null, '', '', null));
  }  


}
