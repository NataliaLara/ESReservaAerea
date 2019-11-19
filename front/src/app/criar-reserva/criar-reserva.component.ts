import {Component, Inject, OnInit} from '@angular/core';
import {Reserva} from "../reservas/reservas.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../store/index";
import {Store} from "@ngrx/store";
import {ReservaListModule} from "../store/actions/reserva.action";
import {Router} from "@angular/router";
import {Page} from '../utils/page';
import { Cidade } from '../cidades/cidades.interface';
import { CidadeService } from '../cidades/cidade.service';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.css']
})
export class CriarReservaComponent implements OnInit {

  cidades : Cidade[];
  public reservaForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>,
  private cidadeService: CidadeService) {
    this.reservaForm = fb.group({
      quantPessoas: ['', Validators.required],
      idReserva: ['', Validators.required],
      dataIda:['', Validators.required],
      dataVolta: ['', Validators.required],
      cidadeOri: ['', Validators.required],
      cidadeDest: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  findByNomeCidade(){
    this.cidadeService.getCidade.arguments(
      (dados: Page<Cidade>)=>{
        this.cidades = dados.content;
        console.log("Find Cidade", this.cidades);
      }
    )
  } 

  createReserva(data: Reserva) {
    const payload = {
      ...data
    };
    this.store.dispatch(new ReservaListModule.LoadCreateReserva(payload));
    // this.reservaForm.reset();
    this.router.navigateByUrl('/reserva');
  }

}
