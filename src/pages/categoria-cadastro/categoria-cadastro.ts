import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Categoria } from '../../model/categoria';
import { CategoriaService } from './../../services/categoria.service';

@IonicPage()
@Component({
  selector: 'page-categoria-cadastro',
  templateUrl: 'categoria-cadastro.html',
  providers: [
    CategoriaService
  ]
})
export class CategoriaCadastroPage {
  
  public categoria = new Categoria();
  private formCategoria: FormGroup;
  messageDescricao = "";
  errorDescricao = false;

  constructor(
    private categoriaService: CategoriaService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController) {
    this.categoria.descricao = this.navParams.data['categoria'];
    this.formCategoria = this.formBuilder.group({
      descricao: ['', Validators.required],
    });
  }

  ionViewDidLoad() {

  }

  salvarCategoria() {    
    this.categoriaService.postCategoria(this.formCategoria.value).subscribe(
      data => {
        this.showAlert("Parabéns", "A categoria foi salva!");
        this.formCategoria.reset();
      },
      erro => {
        let pegaErro = erro['body'].JSON();
      });
      this.navCtrl.pop();
  }

  showAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }


}

