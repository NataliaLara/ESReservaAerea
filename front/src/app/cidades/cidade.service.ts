import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {Cidade} from "./cidades.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class CidadeService {
  constructor(private http: HttpClient) { }
  
  getCidade(): Observable<Cidade[]> {
    return  this.http.get<Cidade[]>(`${environment.apiUrl}/cidades`);
  }

  createCidade(body): Observable<Cidade> {
    return this.http.post<Cidade>(`${environment.apiUrl}/cidades`, body);
  }

  deleteCidade(nome): Observable<string> {
    return this.http.post<Cidade>(`${environment.apiUrl}/cidades/delete`, {'nome': nome})
      .pipe(map(response => nome));
  }
}
