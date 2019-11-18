import { Component, OnInit } from '@angular/core';
import {Cidade} from './cidades.interface';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AppState} from "../store/index";
import {select, Store} from "@ngrx/store";
import {CidadeListModule} from "../store/actions/cidade.action";
import {selectCidadeListEntitiesConverted$, selectCidadesLoading$} from "../store/selectors/cidade.selector";

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  public cidades$: Observable<Cidade[]>;
  public  cidadesLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.cidades$ = store
      .pipe(select(selectCidadeListEntitiesConverted$));

    this.cidadesLoading = store.pipe(select(selectCidadesLoading$));
  }
  
  ngOnInit() {
    this.store.dispatch(new  CidadeListModule.LoadInitCidades());
  }

  goToAddCidade () {
    this.router.navigateByUrl('/criar-cidade');
  }

  deleteCidade(nome: string) {
    this.store.dispatch(new CidadeListModule.LoadDeleteCidade(nome));
  }

}
