import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs/Observable';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {PessoaService} from "../../pessoas/pessoa.service";
import {PessoaListModule} from "../actions/pessoa.action";

@Injectable()
export  class  PessoaListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadPessoas$: Observable<PessoaListModule.Actions> = this.actions$
    .pipe(
      ofType(PessoaListModule.ActionTypes.LOAD_INIT_PESSOAS),
      switchMap(action  =>  this.pessoaListService.getPessoa()),
      map(pessoas => new PessoaListModule.SuccessInitPessoas(pessoas)),
      catchError((err) => of(new PessoaListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadCreatePessoa$: Observable<PessoaListModule.Actions> = this.actions$
    .pipe(
      ofType<PessoaListModule.LoadCreatePessoa>(PessoaListModule.ActionTypes.LOAD_CREATE_PESSOA),
      switchMap(action => this.pessoaListService.createPessoa(action.payload)),
      map(pessoa => new PessoaListModule.SuccessCreatePessoa(pessoa)),
      catchError((err) => of(new PessoaListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeletePessoa$: Observable<PessoaListModule.Actions> = this.actions$
    .pipe(
      ofType<PessoaListModule.LoadDeletePessoa>(PessoaListModule.ActionTypes.LOAD_DELETE_PESSOA),
      switchMap(action => this.pessoaListService.deletePessoa(action.payload)),
      map(cpf => new PessoaListModule.SuccessDeletePessoa(cpf)),
      catchError((err) => of(new PessoaListModule.ErrorLoadAction(err)))
    );

  constructor(
    private  pessoaListService: PessoaService,
    private  actions$: Actions,
  ) {}

}
