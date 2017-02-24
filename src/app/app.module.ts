import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserRegistrationService, UserLoginService, UserParametersService, CognitoUtil} from './service/cognito.service';
import {routing} from './app.routes';
import {HomeComponent, AboutComponent, HomeLandingComponent} from './public/home.component';
import {AwsUtil} from './service/aws.service';
import {UseractivityComponent} from './secure/useractivity/useractivity.component';
import {MyProfileComponent} from './secure/profile/myprofile.component';
import {SecureHomeComponent} from './secure/landing/securehome.component';
import {JwtComponent} from './secure/jwttokens/jwt.component';
import {DynamoDBService} from './service/ddb.service';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {Ng2UploaderModule} from 'ng2-uploader';
import {LoginComponent} from './public/auth/login/login.component';
import {RegisterComponent} from './public/auth/register/registration.component';
import {ForgotPasswordStep1Component, ForgotPassword2Component} from './public/auth/forgot/forgotPassword.component';
import {LogoutComponent, RegistrationConfirmationComponent} from './public/auth/confirm/confirmRegistration.component';
import {ResendCodeComponent} from './public/auth/resend/resendCode.component';
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


@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        JwtComponent,
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
        ProjectService,
        CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
