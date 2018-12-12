import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TractatesPage } from './tractates';
import { TractatePage} from '../tractate/tractate'

@NgModule({
  declarations: [
    TractatesPage,
    
  ],
  imports: [
    IonicPageModule.forChild(TractatesPage),
  ],
})
export class TractatesPageModule {}
