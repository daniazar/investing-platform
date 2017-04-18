import {Component} from "@angular/core";
import {Router} from "@angular/router";

declare var AWS: any;
@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './myprofile.html'
})
export class MyProfileComponent {

    public parameters: Array<Parameters> = [];
    public cognitoId: String;

    constructor(public router: Router) {
        //this.userService.isAuthenticated(this);
        console.log("In MyProfileComponent");
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            //this.userParams.getParameters(new GetParametersCallback(this));
        }
    }
}

export class Parameters {
    name: string;
    value: string;
}


