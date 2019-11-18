import * as fromCidades from '../reducers/cidade.reducer';
import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
export { selectCidadesIds, selectCidadesEntities, selectCidades, selectTotalCidades } from '../reducers/cidade.reducer';

export const selectCidadeListState$ = (state: AppState) =>  state.cidades;

export const selectCidadeListEntitiesConverted$ = createSelector(
  selectCidadeListState$,
  fromCidades.selectCidades);

export  const  selectCidadesLoading$ =
  createSelector(selectCidadeListState$, (cidades) =>  cidades.loading);

export  const  selectCidadesLoaded$ =
  createSelector(selectCidadeListState$, (cidades) =>  cidades.loaded);

export const selectCidadesErrors$ =
  createSelector(selectCidadeListState$, (cidades) => cidades.logs);
