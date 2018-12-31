import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TractatesPage} from '../tractates/tractates';
import {TractatePage} from '../tractate/tractate';
import {DafYomiCalculaterProvider} from '../../providers/daf-yomi-calculater/daf-yomi-calculater';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todaysTractate = {};
  yesterdaysTractate = {};
  tomorrowsTractate = {};
  constructor(public navCtrl: NavController, private dafYomiCalculater : DafYomiCalculaterProvider) {
  }
  
  sedarim = ['זרעים', 'מועד', 'נשים', 'נזקין', 'קדשים', 'טהרות' ];

  handleSederClick = (seder) => {
    console.log('clicked ' + seder)
    this.navCtrl.push(TractatesPage, {seder: seder});
  }
  ionViewDidLoad = () => {
    this.todaysTractate = this.dafYomiCalculater.calculateDafYomiToday(0);
    this.yesterdaysTractate = this.dafYomiCalculater.calculateDafYomiToday(-1);
    this.tomorrowsTractate = this.dafYomiCalculater.calculateDafYomiToday(1);
  }



  isDafYomiCurrentTab = true;

   handleTabClick = (button) => {
     
     if(button._elementRef.nativeElement.name === 'dafYomi') {
     this.isDafYomiCurrentTab = true;
    }
     else {
       this.isDafYomiCurrentTab = false;
     }
   }

   handleDafYomiButtonClick = (tractate ) : void => {
     console.log(tractate)
      const tractatateName = tractate.tractateName;
      const pageValuePrefix = tractate.pageNumber <= 9 ? '0' : '';
      this.navCtrl.push(TractatePage, {tractate: tractatateName, pageValue: pageValuePrefix + tractate.pageNumber})
   }
}
