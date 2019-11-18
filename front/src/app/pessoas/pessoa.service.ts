import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {Pessoa} from "./pessoas.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) { }
  
  getPessoa(): Observable<Pessoa[]> {
    return  this.http.get<Pessoa[]>(`${environment.apiUrl}/pessoas`);
  }

  createPessoa(body): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${environment.apiUrl}/pessoas`, body);
  }

  deletePessoa(cpf): Observable<string> {
    return this.http.post<Pessoa>(`${environment.apiUrl}/pessoas/delete`, {'cpf': cpf})
      .pipe(map(response => cpf));
  }
}
