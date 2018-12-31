import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TractatesPage} from '../pages/tractates/tractates';
import {TractatePage} from '../pages/tractate/tractate';

import {PageOptionValuePipe} from '../pipes/page-option-value/page-option-value';
import { DafYomiCalculaterProvider } from '../providers/daf-yomi-calculater/daf-yomi-calculater';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TractatesPage,
    TractatePage,
    PageOptionValuePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TractatesPage,
    TractatePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DafYomiCalculaterProvider,
  ]
})
export class AppModule {}
