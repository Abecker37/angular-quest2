import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({

    declarations: [
        AppComponent,
        MenuComponent,
        UserProfileComponent,
        SignUpComponent,
        MyFormComponent,
        SearchMovieComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
         ReactiveFormsModule,
    ],

    providers: [],

    bootstrap: [AppComponent]

})

export class AppModule { }