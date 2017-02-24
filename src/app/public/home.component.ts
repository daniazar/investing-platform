import {Component, OnInit} from '@angular/core';
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
    constructor() {
        console.log('HomeLandingComponent constructor');
        this.mostRecent = this.getInvestItems() ;
    }
      getInvestItems() {
       let loc = 'Buenos Aires, Arg';
       let desc = 'description lala alal al al alla la 1';
       let img ='https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png';
      return [
      {id: '1', TNA: 4, location:loc, category:'Tech', title: 'titulo 1', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
      {id: '2', TNA: 4, location:loc, category:'Tech', title: 'titulo 2', description: desc, image: img, invesment: 100, duration: 3, curAmount: 400},
      {id: '3', TNA: 4, location:loc, category:'Tech', title: 'titulo 3', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
      {id: '4', TNA: 4, location:loc, category:'Tech', title: 'titulo 4', description: desc, image: img, invesment: 100, duration: 3, curAmount: 30},
      {id: '5', TNA: 4, location:loc, category:'Tech', title: 'titulo 5', description: desc, image: img, invesment: 100, duration: 3, curAmount: 10},
      {id: '6', TNA: 4, location:loc, category:'Tech', title: 'titulo 6', description: desc, image: img, invesment: 150, duration: 3, curAmount: 30}
    ];
    }

}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log('HomeComponent constructor');
    }

    ngOnInit() {

    }
}


