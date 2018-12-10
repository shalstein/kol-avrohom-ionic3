import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TractatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tractates',
  templateUrl: 'tractates.html',
})
export class TractatesPage {
  currentSeder : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log(this.navParams.get('seder'))
    this.currentSeder = this.navParams.get('seder');
  }



  mesechtos = {זרעים: ['ברכות'], מועד: ['שבת', 'עירובין', 'פסחים' , 'ראש השנה', '	יומא', 'סוכה', 'ביצה', 'תענית', 'מגילה', 'מועד קטן',   'חגיגה'], נשים: ['יבמות', 'כתובות', 'נדרים', 'נזיר', 'סוטה', 'גיטין', 'קידושין'  ], נזקין: ['בבא קמא', 'בבא מציעא', 'בבא בתרא', 'סנהדרין', 'מכות', 'שבועות', 'עבודה זרה', 'הוריות' ], קדשים: ['זבחים', 'מנחות', 'חולין', 'בכורות', 'ערכין', 'תמורה', 'כריתות', 'מעילה', 'תמיד' ], טהרות: ['נידה']}
  
}
