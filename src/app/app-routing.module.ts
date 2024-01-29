import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'search-movie', component: SearchMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }