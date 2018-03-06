import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import 'rxjs/add/observable/throw';
import { Categoria } from '../../model/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { CategoriaCadastroPage } from './../categoria-cadastro/categoria-cadastro';

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
  private loaded = false;
  public categoriaCadastro = CategoriaCadastroPage;
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaService: CategoriaService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidEnter() {
    this.carregarCategorias();
  }


  carregarCategorias() {        
    this.categoriaService.getCategoriasPaginadas(this.page - 1).subscribe(
      data => {
        this.listaCategorias = data['data'];
      },
    );
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.loaded = true;
    }, 50)
    this.page = 1;
    this.listaCategorias = [];
    this.carregarCategorias();
    setTimeout(() => {
      refresher.complete();
    }, 200);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.carregarCategorias();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 300);
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando lista de Podcasts..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  editarCategoria(categoria) {
    let prompt = this.alertCtrl.create({
      title: categoria.descricao,
      message: "Informações da categoria.",
      inputs: [
        {
          name: 'descricao',
          placeholder: categoria.descricao,
          value: categoria.descricao
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Excluir',
          handler: data => {
            let params: any = {
              id: categoria.id
            }
            this.categoriaService.excluirCategoria(params).subscribe(
              data => console.log(data.message),
              err => console.log(err)              
            );
            this.listaCategorias = [];
            this.page = 1;
            this.carregarCategorias();
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let params: any = {
              id: categoria.id,              
              descricao: data.descricao              
            }
            this.categoriaService.editarCategoria(params).subscribe(
              data => console.log(data.message),
              err => console.log(err)
            );
            this.listaCategorias = [];
            this.page = 1;
            this.carregarCategorias();
          }
        }        
      ]      
    });
    prompt.present();
  }

}
