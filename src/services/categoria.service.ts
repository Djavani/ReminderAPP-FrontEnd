import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PathConfig } from '../util/path';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Categoria } from '../model/categoria';


@Injectable()
export class CategoriaService {

    constructor(public http: Http) {

    }

    getCategoriasPaginadas(page): Observable<Categoria[]> {
        return this.http.get(PathConfig.apiPath + '/api/categorias?page=' + page + '&sort=descricao')
            .map((response: Response) => <Categoria[]> response.json())
            .catch(this.handleError);
    }


    getCategoriasPaginadasFullText(texto: string) {
        return this.http.get(PathConfig.apiPath + '/categorias/' + texto + '&sort=score')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erro no Servidor');
    }
}