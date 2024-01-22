import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
export const ROUTES: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'user', component: UserProfileComponent },
];
