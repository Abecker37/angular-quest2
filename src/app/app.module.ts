import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({

    declarations: [
        AppComponent,
        MenuComponent,
        UserProfileComponent,
        SignUpComponent,
        MyFormComponent,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],

    providers: [],

    bootstrap: [AppComponent]

})

export class AppModule { }