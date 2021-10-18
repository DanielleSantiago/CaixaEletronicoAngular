import { Component, OnInit } from '@angular/core';
import { ContasService } from 'src/app/services/contas.service';
import { ContaBancaria } from '../../Interfaces/contaBancaria';


@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  contas: ContaBancaria [] = [];

  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.contasService
      .listarTodasContas()
      .subscribe((result: ContaBancaria[]) => {
      this.contas = result;
    }, error => {
      console.error(error)
    });
  }

}


