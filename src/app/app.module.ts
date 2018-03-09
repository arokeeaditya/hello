import { PrivacyPage } from './../pages/privacy/privacy';
import { SplashPageModule } from './../pages/splash/splash.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';

import firebase from 'firebase';
export const firebaseConfig={
  apiKey: "AIzaSyBVa54ux00JwHweslLSeNfhe5R5LHyjDno",
  authDomain: "auth-37589.firebaseapp.com",
  databaseURL: "https://auth-37589.firebaseio.com",
  projectId: "auth-37589",
  storageBucket: "auth-37589.appspot.com",
  messagingSenderId: "430745713210"
}
firebase.initializeApp(firebaseConfig)

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';

import { SplashPage } from './../pages/splash/splash';
import { TermsPage } from '../pages/terms/terms';
import { TermsPageModule } from '../pages/terms/terms.module';
import { PrivacyPageModule } from '../pages/privacy/privacy.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    SplashPageModule,
    TermsPageModule,
    PrivacyPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SplashPage,
    TermsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
