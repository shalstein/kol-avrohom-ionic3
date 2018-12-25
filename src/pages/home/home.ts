import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TractatesPage} from '../tractates/tractates'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  sedarim = ['זרעים', 'מועד', 'נשים', 'נזקין', 'קדשים', 'טהרות' ];

  handleSederClick = (seder) => {
    console.log('clicked ' + seder)
    this.navCtrl.push(TractatesPage, {seder: seder});
  }

  isDafYomiCurrentTab = true;

   handleTabClick = (button) => {
     
     if(button._elementRef.nativeElement.name ===  'dafYomi') {
     this.isDafYomiCurrentTab = true;
    }
     else {
       this.isDafYomiCurrentTab = false;
     }
   }
}
