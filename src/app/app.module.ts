import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {HomeComponent, AboutComponent, HomeLandingComponent} from './public/home.component';
import {MyProfileComponent} from './secure/profile/myprofile.component';
import {SecureHomeComponent} from './secure/landing/securehome.component';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {Ng2UploaderModule} from 'ng2-uploader';
import { MaterialModule } from '@angular/material';
import { InvestCardComponent } from './invest-card/invest-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { CategoryService } from './services/category.service';
import { ProjectService } from './services/project.service';
import { RewardCardComponent } from './reward-card/reward-card.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { ProjectFormPageComponent } from './pages/project-form-page/project-form-page.component';
import { AuthService} from './services/auth.service';
import { AuthGuard} from './services/auth.guard';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
//import  MyAuthHttp from './services/auth.http.service.factory';

import { ProfileEdit }      from './secure/profile/profile_edit.component';
import { ProfileShow }      from './secure/profile/profile_show.component';


@NgModule({
    declarations: [
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        ProfileEdit,
        ProfileShow,
        MyProfileComponent,
        SecureHomeComponent,
        AppComponent,
        InvestCardComponent,
        CategoryPageComponent,
        ProjectDetailPageComponent,
        RewardCardComponent,
        AboutCardComponent,
        ProjectFormPageComponent
    ],
    imports: [
        Ng2AutoCompleteModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2UploaderModule,
        routing,
        MaterialModule.forRoot(),
         FlexLayoutModule.forRoot()
    ],
    providers: [
        CategoryService,
        AUTH_PROVIDERS,
        ProjectService,
       // MyAuthHttp,
        AuthService,
        AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
