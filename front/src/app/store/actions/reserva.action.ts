import { HttpErrorResponse } from '@angular/common/http';
import {Reserva} from "../../reservas/reservas.interface";

export namespace ReservaListModule {

  export enum ActionTypes {
    LOAD_INIT_RESERVAS = '[reservaList] Load Init Reserva',
    SUCCESS_INIT_RESERVAS = '[reservaList] Success Init Reserva',
    LOAD_DELETE_RESERVA = '[todoList] Load Delete Reserva',
    SUCCESS_DELETE_RESERVA = '[todoList] Success Delete Reserva',
    LOAD_CREATE_RESERVA = '[reservaList] Load Create Reserva',
    SUCCESS_CREATE_RESERVA = '[reservaList] Success Create Reserva',
    ERROR_LOAD_ACTION = '[reservaList] Error Load Action'
  }

  export  class  LoadInitReservas {
    readonly  type = ActionTypes.LOAD_INIT_RESERVAS;
  }

  export  class  SuccessInitReservas {
    readonly  type = ActionTypes.SUCCESS_INIT_RESERVAS;
    constructor( public payload: Reserva[]) {}
  }

  export class LoadDeleteReserva {
    readonly type = ActionTypes.LOAD_DELETE_RESERVA;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteReserva {
    readonly type = ActionTypes.SUCCESS_DELETE_RESERVA;
    constructor(public payload: number) {}
  }

  export class LoadCreateReserva {
    readonly type = ActionTypes.LOAD_CREATE_RESERVA;
    constructor(public payload: Reserva) {}
  }

  export class SuccessCreateReserva {
    readonly type = ActionTypes.SUCCESS_CREATE_RESERVA;
    constructor(public payload: Reserva) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitReservas | ErrorLoadAction | SuccessInitReservas | LoadCreateReserva
    | SuccessCreateReserva |  LoadDeleteReserva
    | SuccessDeleteReserva;
}
