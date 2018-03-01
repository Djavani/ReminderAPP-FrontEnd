import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LembretesPage } from './lembretes';

@NgModule({
  declarations: [
    LembretesPage,
  ],
  imports: [
    IonicPageModule.forChild(LembretesPage),
  ],
})
export class LembretesPageModule {}
