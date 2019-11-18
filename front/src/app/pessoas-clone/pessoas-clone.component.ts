import { Component, OnInit } from '@angular/core';
import {PessoaListModule} from "../store/actions/pessoa.action";
import {Observable} from "rxjs/Rx";
import {Pessoa} from "../pessoas/pessoas.interface";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/index";
import {selectPessoaListEntitiesConverted$, selectPessoasLoading$} from "../store/selectors/pessoa.selector";

@Component({
  selector: 'app-pessoas-clone',
  templateUrl: './pessoas-clone.component.html',
  styleUrls: ['./pessoas-clone.component.css']
})
export class PessoasCloneComponent implements OnInit {

  public pessoas$: Observable<Pessoa[]>;
  public  pessoasLoading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.pessoas$ = store
      .pipe(select(selectPessoaListEntitiesConverted$));

    this.pessoasLoading = store.pipe(select(selectPessoasLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new  PessoaListModule.LoadInitPessoas());
  }

  deletePessoa(cpf: string) {
    this.store.dispatch(new PessoaListModule.LoadDeletePessoa(cpf));
  }

}
