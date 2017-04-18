import {Component, OnInit} from '@angular/core';
import { ProjectService } from '../services/project.service';
import { AuthService } from '../services/auth.service';

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: "awscognito-angular2-app",
    template: "<p>Hello and welcome!</p>"
})
export class AboutComponent {

}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './landinghome.html',
      styleUrls: ['./landinghome.component.scss']

})
export class HomeLandingComponent {
    mostRecent : any;
    constructor(public projectService: ProjectService) {
        console.log('HomeLandingComponent constructor');
        this.mostRecent = this.getInvestItems() ;
    }
      getInvestItems() {
          return this.projectService.getProjectList();
    }

}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './home.html',
    styles: ['.navbar-right { margin-right: 0px !important}']
})
export class HomeComponent implements OnInit {

    constructor(private authService: AuthService) {
        console.log('HomeComponent constructor');
    }

    ngOnInit() {

    }
}


