import { HttpErrorResponse } from '@angular/common/http';
import {Cidade} from "../../cidades/cidades.interface";

export namespace CidadeListModule {

  export enum ActionTypes {
    LOAD_INIT_CIDADES = '[cidadeList] Load Init Cidade',
    SUCCESS_INIT_CIDADES = '[cidadeList] Success Init Cidade',
    LOAD_DELETE_CIDADE = '[todoList] Load Delete Cidade',
    SUCCESS_DELETE_CIDADE = '[todoList] Success Delete Cidade',
    LOAD_CREATE_CIDADE = '[cidadeList] Load Create Cidade',
    SUCCESS_CREATE_CIDADE = '[cidadeList] Success CreateCidade',
    ERROR_LOAD_ACTION = '[cidadeList] Error Load Action'
  }

  export  class  LoadInitCidades {
    readonly  type = ActionTypes.LOAD_INIT_CIDADES;
  }

  export  class  SuccessInitCidades {
    readonly  type = ActionTypes.SUCCESS_INIT_CIDADES;
    constructor( public payload: Cidade[]) {}
  }

  export class LoadDeleteCidade {
    readonly type = ActionTypes.LOAD_DELETE_CIDADE;
    constructor(public payload: string) {}
  }

  export class SuccessDeleteCidade {
    readonly type = ActionTypes.SUCCESS_DELETE_CIDADE;
    constructor(public payload: string) {}
  }

  export class LoadCreateCidade {
    readonly type = ActionTypes.LOAD_CREATE_CIDADE;
    constructor(public payload: Cidade) {}
  }

  export class SuccessCreateCidade {
    readonly type = ActionTypes.SUCCESS_CREATE_CIDADE;
    constructor(public payload: Cidade) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitCidades | ErrorLoadAction | SuccessInitCidades | LoadCreateCidade
    | SuccessCreateCidade |  LoadDeleteCidade
    | SuccessDeleteCidade;
}
