import { Component } from '@angular/core';

import { LembretesPage } from './../lembretes/lembretes';
import { CategoriasPage } from '../categorias/categorias';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-tabs',    
    templateUrl: 'tabs.html'
    
})

export class TabsPage {

    lembretesPage : any = LembretesPage;
    categoriasPage : any = CategoriasPage;
    mySelectedIndex: number;

    constructor(public navParams: NavParams) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }

}