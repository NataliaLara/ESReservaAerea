import {Component, Inject, OnInit} from '@angular/core';
import {Pessoa} from "../pessoas/pessoas.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../store/index";
import {Store} from "@ngrx/store";
import {PessoaListModule} from "../store/actions/pessoa.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  public pessoaForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
    this.pessoaForm = fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createPessoa(data: Pessoa) {
    const payload = {
      ...data
    };
    this.store.dispatch(new PessoaListModule.LoadCreatePessoa(payload));
    // this.pessoaForm.reset();
    this.router.navigateByUrl('/pessoa');
  }

}