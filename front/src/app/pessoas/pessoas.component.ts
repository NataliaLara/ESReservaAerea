import { Component, OnInit } from '@angular/core';
import {Pessoa} from './pessoas.interface';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AppState} from "../store/index";
import {select, Store} from "@ngrx/store";
import {PessoaListModule} from "../store/actions/pessoa.action";
import {selectPessoaListEntitiesConverted$, selectPessoasLoading$} from "../store/selectors/pessoa.selector";

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  public pessoas$: Observable<Pessoa[]>;
  public  pessoasLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.pessoas$ = store
      .pipe(select(selectPessoaListEntitiesConverted$));

    this.pessoasLoading = store.pipe(select(selectPessoasLoading$));
  }
  number
  ngOnInit() {
    this.store.dispatch(new  PessoaListModule.LoadInitPessoas());
  }

  goToAddPessoa () {
    this.router.navigateByUrl('/criar-pessoa');
  }

  deletePessoa(cpf: string) {
    this.store.dispatch(new PessoaListModule.LoadDeletePessoa(cpf));
  }

}
