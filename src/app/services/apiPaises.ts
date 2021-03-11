import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiPaises {

    constructor( private http: HttpClient ){}

    getPaises(): Observable<any> {
        const enpoint = environment.paises;
        return this.http.get(`${enpoint}`);
    }
}