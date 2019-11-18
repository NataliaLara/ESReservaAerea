import {Cidade} from '../cidades/cidades.interface'
export class Reserva {
  idReserva: Number;
  dataIda:Date;
  dataVolta: Date;
  cidadeOri: Cidade;
  cidadeDest: Cidade;
}