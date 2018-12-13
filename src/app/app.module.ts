import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TractatesPage} from '../pages/tractates/tractates';
import {TractatePage} from '../pages/tractate/tractate';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TractatesPage,
    TractatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (createTranslateLoader),
           deps: [HttpClient]
         }
      })
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
