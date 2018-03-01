import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LembretePage } from '../pages/lembrete/lembrete';
import { LembretesPage } from '../pages/lembretes/lembretes';
import { CategoriasPage } from '../pages/categorias/categorias';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriaService } from './../services/categoria.service';
import { HttpModule } from '@angular/http';
import { CategoriaCadastroPage } from '../pages/categoria-cadastro/categoria-cadastro';


@NgModule({
  declarations: [
    MyApp,    
    CategoriasPage,
    LembretesPage,
    LembretePage,
    TabsPage,
    CategoriaCadastroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    CategoriasPage,
    LembretePage,
    LembretesPage,
    TabsPage,
    CategoriaCadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoriaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
