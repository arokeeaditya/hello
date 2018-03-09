import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2';
import {enableProdMode} from '@angular/core';
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

  phoneNumber: number;
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus:GooglePlus,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
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

  signIn(phoneNumber: number){
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;

    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( confirmationResult => {
        let prompt = this.alertCtrl.create({
          title: 'Enter the Confirmation code',
          inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
          buttons: [
            { text: 'Cancel',
              handler: data => { console.log('Cancel clicked'); }
            },
            { text: 'Send',
              handler: data => {
                confirmationResult.confirm(data.confirmationCode)
                .then(suc=>{
                  this.navCtrl.push(HomePage); {
    // User signed in successfully.

    // alert("signin successfull");
    console.log(suc.user);
    // this.navCtrl.push(HomePage);
                  }
  }).catch(function (error) {
    alert("signin error");
    // User couldn't sign in (bad verification code?)
    // ...
  });
              }
            }
          ]
        });
        prompt.present();
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });

  }

}
