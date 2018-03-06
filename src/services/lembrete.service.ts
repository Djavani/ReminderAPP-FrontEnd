import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PathConfig } from '../util/path';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Lembrete } from "../model/lembrete";


@Injectable()
export class LembreteService {
    
    constructor(public http: Http){

    }

    postLembrete(lembrete: Lembrete) {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(PathConfig.apiPath + '/api/lembretes', lembrete)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    editarLembrete(lembrete: Lembrete) {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.put(PathConfig.apiPath + '/api/lembretes/' + lembrete.id, lembrete )
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    excluirLembrete(lembrete: Lembrete) {                
        return this.http.delete(PathConfig.apiPath + '/api/lembretes/' + lembrete.id)
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    getLembretesPaginadas(page): Observable<Lembrete[]> {
        return this.http.get(PathConfig.apiPath + '/api/lembretes?page=' + page + '&sort=descricao')
            .map((response: Response) => <Lembrete[]>response.json())
            .catch(this.handleError);
    }


    getLembretesPaginadasFullText(texto: string) {
        return this.http.get(PathConfig.apiPath + '/lembretes/' + texto + '&sort=score')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erro no Servidor');
    }
}