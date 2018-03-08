
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus,public navParams: NavParams) {

  }
  login(){
    this.googleplus.login({
      'webClientId':'430745713210-tou81pvel86ou4jad442o4kmukttepes.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
       this.navCtrl.push(LoginPage);
      }).catch(ns=>{
        alert('not succes');
      })
    })
  }

}
