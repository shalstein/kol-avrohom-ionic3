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
  
  dumbPageValue = 19;
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

   handleDafYomiButtonClick = (tractate : object) : void => {
      // const tractate = 'חגיגה';
      
      console.log( this.dumbPageValue)
      this.navCtrl.push(TractatePage, {tractate, pageValue: '' +  this.dumbPageValue})
   }
}
