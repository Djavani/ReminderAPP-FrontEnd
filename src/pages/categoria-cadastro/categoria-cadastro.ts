import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-categoria-cadastro',
  templateUrl: 'categoria-cadastro.html',
})
export class CategoriaCadastroPage {

  public cadastroCategoriaForm: any;
  messageDescricao = "";  
  errorDescricao = false;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder) {
    this.cadastroCategoriaForm = formBuilder.group({
      descricao: ['', Validators.required],
      //password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
    });
  }

  ionViewDidLoad() {

  }

  gravar() {
    let { descricao } = this.cadastroCategoriaForm.controls;
 
    if (!this.cadastroCategoriaForm.valid) {
      if (!descricao.valid) {
        this.errorDescricao = true;
        this.messageDescricao = "Informe uma descricao";
      } else {
        this.messageDescricao = "";
      }
    }
    else {
      //gravar a categoria
      alert("Categoria Gravada");
      this.cadastroCategoriaForm.reset();
    }
  }

}

