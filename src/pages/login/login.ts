import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus:GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.googleplus.login({
      'webClientId':'430745713210-tou81pvel86ou4jad442o4kmukttepes.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
       this.navCtrl.push(HomePage);
      }).catch(ns=>{
        alert('not succes');
      })
    })
  }

}
