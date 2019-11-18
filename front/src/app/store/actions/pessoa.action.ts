import { HttpErrorResponse } from '@angular/common/http';
import {Pessoa} from "../../pessoas/pessoas.interface";

export namespace PessoaListModule {

  export enum ActionTypes {
    LOAD_INIT_PESSOAS = '[pessoaList] Load Init Pessoa',
    SUCCESS_INIT_PESSOAS = '[pessoaList] Success Init Pessoa',
    LOAD_DELETE_PESSOA = '[todoList] Load Delete Pessoa',
    SUCCESS_DELETE_PESSOA = '[todoList] Success Delete Pessoa',
    LOAD_CREATE_PESSOA = '[pessoaList] Load Create Pessoa',
    SUCCESS_CREATE_PESSOA = '[pessoaList] Success Create Pessoa',
    ERROR_LOAD_ACTION = '[pessoaList] Error Load Action'
  }

  export  class  LoadInitPessoas {
    readonly  type = ActionTypes.LOAD_INIT_PESSOAS;
  }

  export  class  SuccessInitPessoas {
    readonly  type = ActionTypes.SUCCESS_INIT_PESSOAS;
    constructor( public payload: Pessoa[]) {}
  }

  export class LoadDeletePessoa {
    readonly type = ActionTypes.LOAD_DELETE_PESSOA;
    constructor(public payload: string) {}
  }

  export class SuccessDeletePessoa {
    readonly type = ActionTypes.SUCCESS_DELETE_PESSOA;
    constructor(public payload: string) {}
  }

  export class LoadCreatePessoa {
    readonly type = ActionTypes.LOAD_CREATE_PESSOA;
    constructor(public payload: Pessoa) {}
  }

  export class SuccessCreatePessoa {
    readonly type = ActionTypes.SUCCESS_CREATE_PESSOA;
    constructor(public payload: Pessoa) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitPessoas | ErrorLoadAction | SuccessInitPessoas | LoadCreatePessoa
    | SuccessCreatePessoa |  LoadDeletePessoa
    | SuccessDeletePessoa;
}
