import {Component, Inject, OnInit} from '@angular/core';
import {Cidade} from "../cidades/cidades.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../store/index";
import {Store} from "@ngrx/store";
import {CidadeListModule} from "../store/actions/cidade.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-cidade',
  templateUrl: './criar-cidade.component.html',
  styleUrls: ['./criar-cidade.component.css']
})
export class CriarCidadeComponent implements OnInit {

  public cidadeForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
    this.cidadeForm = fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createCidade(data: Cidade) {
    const payload = {
      ...data
    };
    this.store.dispatch(new CidadeListModule.LoadCreateCidade(payload));
    // this.cidadeForm.reset();
    this.router.navigateByUrl('/cidade');
  }

}
