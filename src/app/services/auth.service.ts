import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import Config              from '../config'

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    options = {
    language: 'es'
  };
  // Configure Auth0
  lock = new Auth0Lock(Config.auth.clientID, Config.auth.domain, this.options);
  //Store profile object in auth class
  userProfile: any;

  constructor(private router: Router) {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    if(this.userProfile && ! this.userProfile.user_metadata){
      this.userProfile.user_metadata = {};
    }
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;

        // Redirect if there is a saved url to do so.
        var redirectUrl: string = localStorage.getItem('redirect_url');
        if(redirectUrl != undefined){
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirect_url');
        }
      });
    });
  }

  public getProfile(){
    return this.userProfile;
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public isLoggedIn() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'token'
    return tokenNotExpired('token');
  };

  public   isAuthenticated() {
    return tokenNotExpired('token');
    
  };

  public isAdmin() {
    return this.userProfile && this.userProfile.app_metadata
      && this.userProfile.app_metadata.roles
      && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'token'
    return tokenNotExpired('token');
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    console.log('logout');
    this.userProfile = undefined;
    this.router.navigate(['']);
  };
};

export default AuthService;