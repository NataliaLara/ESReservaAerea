import * as fromPessoas from '../reducers/pessoa.reducer';
import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
export { selectPessoasIds, selectPessoasEntities, selectPessoas, selectTotalPessoas } from '../reducers/pessoa.reducer';

export const selectPessoaListState$ = (state: AppState) =>  state.pessoas;

export const selectPessoaListEntitiesConverted$ = createSelector(
  selectPessoaListState$,
  fromPessoas.selectPessoas);

export  const  selectPessoasLoading$ =
  createSelector(selectPessoaListState$, (pessoas) =>  pessoas.loading);

export  const  selectPessoasLoaded$ =
  createSelector(selectPessoaListState$, (pessoas) =>  pessoas.loaded);

export const selectPessoasErrors$ =
  createSelector(selectPessoaListState$, (pessoas) => pessoas.logs);
