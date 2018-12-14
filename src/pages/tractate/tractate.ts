import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TractatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tractate',
  templateUrl: 'tractate.html',
})
export class TractatePage {
  tractate : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tractate = this.navParams.get('tractate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TractatePage' + this.tractate);

  }

  currentDaf = '02';

  handleDafInputChange = (event) => {
    console.log(event)
    this.currentDaf = event.target.value;
  }

}
