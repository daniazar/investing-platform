import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeLandingComponent, AboutComponent, HomeComponent} from './public/home.component';
import {SecureHomeComponent} from './secure/landing/securehome.component';
import {MyProfileComponent} from './secure/profile/myprofile.component';
import {AppComponent} from './app.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {ProjectDetailPageComponent} from './pages/project-detail-page/project-detail-page.component';
import {ProjectFormPageComponent} from './pages/project-form-page/project-form-page.component';
import { AuthGuard } from './services/auth.guard';
import {ProfileEdit} from './secure/profile/profile_edit.component';
import {ProfileShow} from './secure/profile/profile_show.component';

const homeRoutes: Routes = [
    /*{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },*/
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'about', component: AboutComponent},
//            {path: 'login', component: LoginComponent},
//            {path: 'register', component: RegisterComponent},
//            {path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent},
//            {path: 'resendCode', component: ResendCodeComponent},
//            {path: 'forgotPassword/:email', component: ForgotPassword2Component},
//            {path: 'forgotPassword', component: ForgotPasswordStep1Component},
            {path: 'category/:id', component: CategoryPageComponent},
            {path: 'create', component: ProjectFormPageComponent, canActivate: [AuthGuard]},
            {path: 'project/:id', component: ProjectDetailPageComponent},
      { path: 'profile/edit',  component: ProfileEdit },
      { path: 'profile',     component: ProfileShow },

            {path: '', component: HomeLandingComponent}
        ]
    },
];

const secureHomeRoutes: Routes = [
    /*{

        path: '',
        redirectTo: '/securehome',
        pathMatch: 'full'
    },*/
    {
        path: 'securehome', component: SecureHomeComponent, children: [
        //{path: 'logout', component: LogoutComponent},
        //{path: 'jwttokens', component: JwtComponent},
          {}
    ]
  
        //{path: 'useractivity', component: UseractivityComponent},
        //{path: '', component: MyProfileComponent}]
    }
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...homeRoutes,
            ...secureHomeRoutes,
            {
                path: '',
                component: HomeComponent
            }
        ]
    },


];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
