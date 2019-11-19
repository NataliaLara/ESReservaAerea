import {Cidade} from '../cidades/cidades.interface'
export class Reserva {
  quantPessoas: Number;
  idReserva: Number;
  dataIda:Date;
  dataVolta: Date;
  cidadeOri: Cidade;
  cidadeDest: Cidade;
}