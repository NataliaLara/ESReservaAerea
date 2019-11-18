import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Reserva} from "../../reservas/reservas.interface";
import {ReservaListModule} from "../actions/reserva.action";

export interface ReservaListStateEntity extends EntityState<Reserva> {
  loading: boolean;
  loaded: boolean;
  selectReserva: Reserva;
  logs: {
    type: string;
    message: string;
  };
}

export const ReservaListAdapter: EntityAdapter<Reserva> = createEntityAdapter<Reserva>({
  sortComparer: false
});

export const initialState: ReservaListStateEntity = ReservaListAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectReserva: undefined,
  logs: undefined
});

export const {
  selectIds: selectReservasIds,
  selectEntities: selectReservasEntities,
  selectAll: selectReservas,
  selectTotal: selectTotalReservas
} = ReservaListAdapter.getSelectors();

export function reservasReducer(
  state = initialState,
  action: ReservaListModule.Actions
):ReservaListStateEntity {

  switch (action.type) {

    case ReservaListModule.ActionTypes.LOAD_INIT_RESERVAS:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case ReservaListModule.ActionTypes.SUCCESS_INIT_RESERVAS:
      return {
        ...ReservaListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case ReservaListModule.ActionTypes.LOAD_DELETE_RESERVA:
      return {
        ...state,
        loading: true
      };

    case ReservaListModule.ActionTypes.SUCCESS_DELETE_RESERVA:
      return {
        ...ReservaListAdapter.removeOne(action.payload, state),
        logs: { type: 'SUCCESS', message: 'Reserva excluída com sucesso' }
      };

    case ReservaListModule.ActionTypes.LOAD_CREATE_RESERVA:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case ReservaListModule.ActionTypes.SUCCESS_CREATE_RESERVA:
      // Passe le loading a false et ajoute une reserva
      return {
        ...ReservaListAdapter.addOne(action.payload, state),
        loading: false,
        logs: { type: 'SUCCESS', message: 'Reserva criada com sucesso' },
      };

    case ReservaListModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

    default:
      return state;
  }
}
