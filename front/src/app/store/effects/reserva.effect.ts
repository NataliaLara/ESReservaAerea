import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs/Observable';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {ReservaService} from "../../reservas/reserva.service";
import {ReservaListModule} from "../actions/reserva.action";

@Injectable()
export  class  ReservaListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadReservas$: Observable<ReservaListModule.Actions> = this.actions$
    .pipe(
      ofType(ReservaListModule.ActionTypes.LOAD_INIT_RESERVAS),
      switchMap(action  =>  this.reservaListService.getReserva()),
      map(reservas => new ReservaListModule.SuccessInitReservas(reservas)),
      catchError((err) => of(new ReservaListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadCreateReserva$: Observable<ReservaListModule.Actions> = this.actions$
    .pipe(
      ofType<ReservaListModule.LoadCreateReserva>(ReservaListModule.ActionTypes.LOAD_CREATE_RESERVA),
      switchMap(action => this.reservaListService.createReserva(action.payload)),
      map(reserva => new ReservaListModule.SuccessCreateReserva(reserva)),
      catchError((err) => of(new ReservaListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteReserva$: Observable<ReservaListModule.Actions> = this.actions$
    .pipe(
      ofType<ReservaListModule.LoadDeleteReserva>(ReservaListModule.ActionTypes.LOAD_DELETE_RESERVA),
      switchMap(action => this.reservaListService.deleteReserva(action.payload)),
      map(idReserva => new ReservaListModule.SuccessDeleteReserva(idReserva)),
      catchError((err) => of(new ReservaListModule.ErrorLoadAction(err)))
    );

  constructor(
    private  reservaListService: ReservaService,
    private  actions$: Actions,
  ) {}

}
