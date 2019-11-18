import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {MatiereListEffects} from "./effects/matiere.effect";
import {MatiereListStateEntity, matieresReducer} from "./reducers/matiere.reducer";

import {PessoaListEffects} from "./effects/pessoa.effect";
import {PessoaListStateEntity, pessoasReducer} from "./reducers/pessoa.reducer";

import {CidadeListEffects} from "./effects/cidade.effect";
import {CidadeListStateEntity, cidadesReducer} from './reducers/cidade.reducer';

import {ReservaListEffects} from "./effects/reserva.effect";
import {ReservaListStateEntity, reservasReducer} from "./reducers/reserva.reducer";

// Le root reducer
const reducers = {
  matieres: matieresReducer,
  pessoas: pessoasReducer,
  cidades: cidadesReducer,
  reservas: reservasReducer,
};

export interface AppState {
  matieres: MatiereListStateEntity;
  pessoas: PessoaListStateEntity;
  cidades: CidadeListStateEntity;
  reservas:ReservaListStateEntity;
}

// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export  const  appEffects = [MatiereListEffects,PessoaListEffects,CidadeListEffects,ReservaListEffects];

