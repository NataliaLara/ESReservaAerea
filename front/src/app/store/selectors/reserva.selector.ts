import * as fromReservas from '../reducers/reserva.reducer';
import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
export { selectReservasIds, selectReservasEntities, selectReservas, selectTotalReservas } from '../reducers/reserva.reducer';

export const selectReservaListState$ = (state: AppState) =>  state.reservas;

export const selectReservaListEntitiesConverted$ = createSelector(
  selectReservaListState$,
  fromReservas.selectReservas);

export  const  selectReservasLoading$ =
  createSelector(selectReservaListState$, (reservas) =>  reservas.loading);

export  const  selectReservasLoaded$ =
  createSelector(selectReservaListState$, (reservas) =>  reservas.loaded);

export const selectReservasErrors$ =
  createSelector(selectReservaListState$, (reservas) => reservas.logs);
