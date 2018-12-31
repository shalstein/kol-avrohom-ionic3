import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import dafConverter from 'daf-converter';
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
  @ViewChild('audioPlayer') audioPlayer : ElementRef
  tractate : string;
  tractateEnglishName : string;
  tractatePages = [];
  currentPage = '02'
  audioURL : string;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tractate = this.navParams.get('tractate');
  }


  generateTractatePages = (lastPage) => {
    const pages = []
    for(let i = 2; i <= lastPage; i++){
      pages.push(dafConverter(i))
    }
    return pages
  }


  tractatesMetadata =  {
      ברכות: {name: 'Brochos', lastPage: 64}, שבת: {name: 'Shabbos', lastPage: 157},עירובין: {name: 'Eruvin', lastPage: 104},פסחים: {name: 'Pesachim', lastPage: 120},'ראש השנה': {name: 'RoshHashana', lastPage: 35} ,יומא: {name: 'Yuma', lastPage: 88},סוכה: {name: 'Succah', lastPage: 56},ביצה: {name: 'Beitzah', lastPage: 40},תענית: {name: 'Taanis', lastPage: 31},מגילה: {name: 'Megillah', lastPage: 32},'מועד קטן': {name: 'MoedKatan', lastPage: 29}, חגיגה: {name: 'Chagigah', lastPage: 27},יבמות: {name: 'Yevamos', lastPage: 122},כתובות: {name: 'Kesubos', lastPage: 112},נדרים: {name: 'Nedarim', lastPage: 91},נזיר: {name: 'Nozir', lastPage: 66}, סוטה: {name: 'Sotah', lastPage: 49} ,גיטין: {name: 'Gitin', lastPage: 90},קידושין: {name: 'Kiddushin', lastPage: 82},'בבא קמא': {name: 'BabaKama', lastPage: 119},'בבא מציעא': {name: 'BabaMetzia', lastPage: 119},'בבא בתרא': {name: 'BabaBasra', lastPage: 176},סנהדרין: {name: 'Sanhedrin', lastPage: 113}, מכות: {name: 'Makot', lastPage: 24},שבועות: {name: 'Shevuot', lastPage: 49},'עבודה זרה': {name: 'AvodaZarah', lastPage: 76}, הוריות: {name: 'Horayos', lastPage: 14},זבחים: {name: 'Zevachim', lastPage: 120},מנחות: {name: 'Menachos', lastPage: 110},חולין: {name: 'Chulin', lastPage: 64},בכורות: {name: 'Bechoros', lastPage: 61},ערכין: {name: 'Erchin', lastPage: 34},תמורה: {name: 'Temura', lastPage: 34},כריתות: {name: 'Kerisus', lastPage: 28},מעילה: {name: 'Meilah', lastPage: 22}, נידה: {name: 'Niddah', lastPage: 73}
}
  

  handleSelectDafChange = audioPlayer => {
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    audioPlayer.load();
    audioPlayer.play();
  }

  ionViewDidLoad() {
    this.tractateEnglishName = this.tractatesMetadata[this.tractate].name 
    this.audioURL = `http://download.kolavrohom.com/${this.tractateEnglishName}/${this.currentPage}.mp3`;
    this.tractatePages = this.generateTractatePages(this.tractatesMetadata[this.tractate].lastPage);
    const pageValueParam = this.navParams.get('pageValue');
    if (pageValueParam) {
      this.currentPage = pageValueParam;
      this.handleSelectDafChange(this.audioPlayer.nativeElement)
    }

  }


}