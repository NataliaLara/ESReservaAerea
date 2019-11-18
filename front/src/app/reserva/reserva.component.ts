import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cidade } from '../cidades/cidades.interface';
import { CidadeService } from '../cidades/cidade.service';
import {Page} from '../utils/page'
//import { MessageService, SelectItem } from 'primeng/api';

//import { products } from '../products';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{

  //cidades: SelectItem[];
  cidades: Cidade[];

  products = [
    {
      name: 'Quantidade de Pessoas:',
      description: ''
    },
    {
      name: 'Cidade Origem:',
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Cidade Destino:',
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Data de Ida:',
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Data de Volta:',
      description: 'A great phone with one of the best cameras'
    },
  ];

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder, private cidadeService: CidadeService,
  ){
    this.checkoutForm = this.formBuilder.group({
      QtdPessoas: '',
      CidadeO: '',
      CidadeD: '',
      DataIda: '',
      DataVolta: '',
    });
  }

  ngOnInit() {
    /*this.cidades = [
      {label: 'Belo Horizonte', value: 'Belo Horizonte' },      
      {label: 'São Paulo', value: 'São Paulo'},
      {label: 'Rio de Janeiro', value: 'Rio de Janeiro'}
    ];*/
  }
  /*
  findByNomeCidade(){
    this.cidadeService.getCidade().subscribe(
      (dados: Page<Cidade>)=>{
        this.cidades = dados.content;
        console.log("Find Cidade", this.cidades);
      }
    )
  } */

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted',
  customerData);

    this.checkoutForm.reset();
  }

  share() {
    window.alert('The product has been shared!');
  }
}
