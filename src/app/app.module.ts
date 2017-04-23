import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from "@angular/router";
import { AF } from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component'; 

export const firebaseConfig = {
  apiKey: 'AIzaSyACkFx2H5xDfhYa_rKkthi0_WFO-yC9Nkc',
  authDomain: 'fir-crud-f2a87.firebaseapp.com',
  databaseURL: 'https://fir-crud-f2a87.firebaseio.com',
  storageBucket: 'fir-crud-f2a87.appspot.com',
  messagingSenderId: '278835166973'
};

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegistrationPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
