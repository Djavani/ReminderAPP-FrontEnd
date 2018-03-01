import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaCadastroPage } from './categoria-cadastro';

@NgModule({
  declarations: [
    CategoriaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaCadastroPage),
  ],
})
export class CategoriaCadastroPageModule {}
