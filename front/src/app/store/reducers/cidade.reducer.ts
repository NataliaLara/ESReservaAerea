import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Cidade} from "../../cidades/cidades.interface";
import {CidadeListModule} from "../actions/cidade.action";

export interface CidadeListStateEntity extends EntityState<Cidade> {
  loading: boolean;
  loaded: boolean;
  selectCidade: Cidade;
  logs: {
    type: string;
    message: string;
  };
}

export const CidadeListAdapter: EntityAdapter<Cidade> = createEntityAdapter<Cidade>({
  sortComparer: false
});

export const initialState: CidadeListStateEntity = CidadeListAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectCidade: undefined,
  logs: undefined
});

export const {
  selectIds: selectCidadesIds,
  selectEntities: selectCidadesEntities,
  selectAll: selectCidades,
  selectTotal: selectTotalCidades
} = CidadeListAdapter.getSelectors();

export function cidadesReducer(
  state = initialState,
  action: CidadeListModule.Actions
):CidadeListStateEntity {

  switch (action.type) {

    case CidadeListModule.ActionTypes.LOAD_INIT_CIDADES:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case CidadeListModule.ActionTypes.SUCCESS_INIT_CIDADES:
      return {
        ...CidadeListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case CidadeListModule.ActionTypes.LOAD_DELETE_CIDADE:
      return {
        ...state,
        loading: true
      };

    case CidadeListModule.ActionTypes.SUCCESS_DELETE_CIDADE:
      return {
        ...CidadeListAdapter.removeOne(action.payload, state),
        logs: { type: 'SUCCESS', message: 'Cidade excluída com sucesso' }
      };

    case CidadeListModule.ActionTypes.LOAD_CREATE_CIDADE:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case CidadeListModule.ActionTypes.SUCCESS_CREATE_CIDADE:
      // Passe le loading a false et ajoute une cidade
      return {
        ...CidadeListAdapter.addOne(action.payload, state),
        loading: false,
        logs: { type: 'SUCCESS', message: 'Cidade criada com sucesso' },
      };

    case CidadeListModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

    default:
      return state;
  }
}
