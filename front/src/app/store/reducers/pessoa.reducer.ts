import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Pessoa} from "../../pessoas/pessoas.interface";
import {PessoaListModule} from "../actions/pessoa.action";

export interface PessoaListStateEntity extends EntityState<Pessoa> {
  loading: boolean;
  loaded: boolean;
  selectPessoa: Pessoa;
  logs: {
    type: string;
    message: string;
  };
}

export const PessoaListAdapter: EntityAdapter<Pessoa> = createEntityAdapter<Pessoa>({
  sortComparer: false
});

export const initialState: PessoaListStateEntity = PessoaListAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectPessoa: undefined,
  logs: undefined
});

export const {
  selectIds: selectPessoasIds,
  selectEntities: selectPessoasEntities,
  selectAll: selectPessoas,
  selectTotal: selectTotalPessoas
} = PessoaListAdapter.getSelectors();

export function pessoasReducer(
  state = initialState,
  action: PessoaListModule.Actions
):PessoaListStateEntity {

  switch (action.type) {

    case PessoaListModule.ActionTypes.LOAD_INIT_PESSOAS:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case PessoaListModule.ActionTypes.SUCCESS_INIT_PESSOAS:
      return {
        ...PessoaListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case PessoaListModule.ActionTypes.LOAD_DELETE_PESSOA:
      return {
        ...state,
        loading: true
      };

    case PessoaListModule.ActionTypes.SUCCESS_DELETE_PESSOA:
      return {
        ...PessoaListAdapter.removeOne(action.payload, state),
        logs: { type: 'SUCCESS', message: 'Pessoa excluída com sucesso' }
      };

    case PessoaListModule.ActionTypes.LOAD_CREATE_PESSOA:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case PessoaListModule.ActionTypes.SUCCESS_CREATE_PESSOA:
      // Passe le loading a false et ajoute une pessoa
      return {
        ...PessoaListAdapter.addOne(action.payload, state),
        loading: false,
        logs: { type: 'SUCCESS', message: 'Pessoa criada com sucesso' },
      };

    case PessoaListModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

    default:
      return state;
  }
}
