import {Cidade} from '../cidades/cidades.interface';

export class Reserva {
  idReserva: Number;
  quantPessoas: Number;
  dataIda:Date;
  dataVolta: Date;
  CidadeOri: Cidade;
  CidadeDest: Cidade;
}
