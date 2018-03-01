import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/observable/throw';
import { Categoria } from '../../model/categoria';
import { CategoriaService } from './../../services/categoria.service';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
  providers: [
    CategoriaService
  ]
})
export class CategoriasPage {

  public listaCategorias: Categoria[] = [];
  private page = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaService: CategoriaService
  ) {
  }

  ionViewDidEnter() {
    this.carregarCategorias();
  }


  carregarCategorias() {    
    this.categoriaService.getCategoriasPaginadas(this.page - 1).subscribe(
      data => {
        this.listaCategorias = data['content'];
      },

    );
    console.log(this.listaCategorias);
    
  }

  mostraCategoriaDetalhe(categoria: Categoria) {
    console.log(categoria);
    
  }

}
