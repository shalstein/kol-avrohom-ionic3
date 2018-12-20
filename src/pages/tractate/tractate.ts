import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import gematriya from 'js-gematriya';
import {GematriyaProvider} from '../../providers/gematriya/gematriya';
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
  tractatePages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public gematriyaProvider : GematriyaProvider) {
    this.tractate = this.navParams.get('tractate');
    console.log(this.gematriyaProvider)
  }

  generateTractatePages = (lastPage) => {
    const pages = []
    for(let i = 2; i <= lastPage; i++){
      // pages.push(gematriya(i, {punctuate: false}))
    }
    return pages
  }


  ionViewDidLoad() {
    // this.tractatePages = this.generateTractatePages(this.lastPage);
    
    console.log(this.tractatePages)
  }

  currentDaf = '2';

  lastPage = 9;

  handleDafInputChange = (event) => {
    this.currentDaf = event.target.value;
  }

  handleSelectDafChange = audioPlayer => audioPlayer.play();
  

}
