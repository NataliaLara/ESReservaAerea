import { Component, OnInit } from '@angular/core';
import {Reserva} from './reservas.interface';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AppState} from "../store/index";
import {select, Store} from "@ngrx/store";
import { Cidade } from '../cidades/cidades.interface';
import { CidadeService } from '../cidades/cidade.service';
import {ReservaListModule} from "../store/actions/reserva.action";
import {selectReservaListEntitiesConverted$, selectReservasLoading$} from "../store/selectors/reserva.selector";
import {Page} from '../utils/page';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  public reservas$: Observable<Reserva[]>;
  public  reservasLoading: Observable<boolean>;
  cidades : Cidade[];

  constructor(private router: Router, private store: Store<AppState>,
    private cidadeService: CidadeService) {
    this.reservas$ = store
      .pipe(select(selectReservaListEntitiesConverted$));

    this.reservasLoading = store.pipe(select(selectReservasLoading$));
  }
  
  ngOnInit() {
    this.store.dispatch(new  ReservaListModule.LoadInitReservas());
  }

  findByNomeCidade(){
    this.cidadeService.getCidade.arguments(
      (dados: Page<Cidade>)=>{
        this.cidades = dados.content;
        console.log("Find Cidade", this.cidades);
      }
    )
  } 

  goToAddReserva () {
    this.router.navigateByUrl('/criar-reserva');
  }

  deleteReserva(idReserva: number) {
    this.store.dispatch(new ReservaListModule.LoadDeleteReserva(idReserva));
  }

}
