import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs/Observable';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {CidadeService} from "../../cidades/cidade.service";
import {CidadeListModule} from "../actions/cidade.action";

@Injectable()
export  class  CidadeListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadCidades$: Observable<CidadeListModule.Actions> = this.actions$
    .pipe(
      ofType(CidadeListModule.ActionTypes.LOAD_INIT_CIDADES),
      switchMap(action  =>  this.cidadeListService.getCidade()),
      map(cidades => new CidadeListModule.SuccessInitCidades(cidades)),
      catchError((err) => of(new CidadeListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadCreateCidade$: Observable<CidadeListModule.Actions> = this.actions$
    .pipe(
      ofType<CidadeListModule.LoadCreateCidade>(CidadeListModule.ActionTypes.LOAD_CREATE_CIDADE),
      switchMap(action => this.cidadeListService.createCidade(action.payload)),
      map(cidade => new CidadeListModule.SuccessCreateCidade(cidade)),
      catchError((err) => of(new CidadeListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteCidade$: Observable<CidadeListModule.Actions> = this.actions$
    .pipe(
      ofType<CidadeListModule.LoadDeleteCidade>(CidadeListModule.ActionTypes.LOAD_DELETE_CIDADE),
      switchMap(action => this.cidadeListService.deleteCidade(action.payload)),
      map(nome => new CidadeListModule.SuccessDeleteCidade(nome)),
      catchError((err) => of(new CidadeListModule.ErrorLoadAction(err)))
    );

  constructor(
    private  cidadeListService: CidadeService,
    private  actions$: Actions,
  ) {}

}
