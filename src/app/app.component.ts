/**
 * @author Vladimir Budilov
 *
 * This is the entry-way into the routing logic. This is the first component that's called when the app
 * loads.
 *
 */
import {Component, OnInit} from "@angular/core";
import AuthService from './services/auth.service'
@Component({
    selector: 'app-root',
    templateUrl: 'template/app.html'
})
export class AppComponent implements OnInit {

    constructor(public authService: AuthService) {
        console.log("AppComponent: constructor");
    }

    ngOnInit() {
        console.log("AppComponent: Checking if the user is already authenticated");
        this.authService.isAuthenticated();
        console.log("User logged in " + this.authService.isLoggedIn());
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        console.log("AppComponent: the user is authenticated: " + isLoggedIn);
        let mythis = this;
        /*this.cognito.getIdToken({
            callback() {

            },
            callbackWithParam(token: any) {
                // Include the passed-in callback here as well so that it's executed downstream
                console.log("AppComponent: calling initAwsService in callback")
                mythis.awsUtil.initAwsService(null, isLoggedIn, token);
            }
        });*/
    }
}

