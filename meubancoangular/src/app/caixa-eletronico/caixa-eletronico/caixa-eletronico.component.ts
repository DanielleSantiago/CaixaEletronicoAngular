import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaqueDeposito } from 'src/app/pages/Interfaces/saque-deposito';
import { ContasService } from 'src/app/services/contas.service';
import { Transferencia } from 'src/app/pages/Interfaces/transferencia';
import Swal from 'sweetalert2';
import { Extrato } from 'src/app/pages/Interfaces/extrato';


@Component({
  selector: 'app-caixa-eletronico',
  templateUrl: './caixa-eletronico.component.html',
  styleUrls: ['./caixa-eletronico.component.css']
})
export class CaixaEletronicoComponent implements OnInit {

  formValue: FormGroup = new FormGroup({

    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    agenciaDestino: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    dataHoraInicial: new FormControl('', Validators.required),
    dataHoraFinal: new FormControl('', Validators.required)


  })

  exibirForm: boolean = true
  extratos: Extrato[] = [];
  agencia: string = '';
  numeroConta: string = '';
  dataHoraInicial: string = '';
  dataHoraFinal: string = '';

  constructor(
    private contasService: ContasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  alternaElemento() {
    this.exibirForm = !this.exibirForm
  }

  saque() {
    const saque: SaqueDeposito = this.formValue.value;
    console.log("Saque", saque);
    this.contasService.saque(saque).subscribe(result => {
      Swal.fire('Saque efetuado com sucesso!');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error =>{
      Swal.fire('Ocorreu um erro durante o saque')
      console.error(error);

    });
  }

  deposito() {
    const deposito: SaqueDeposito = this.formValue.value;
    console.log("Depósito", deposito);
    this.contasService.deposito(deposito).subscribe(result => {
      Swal.fire('Depósito efetuado com sucesso!');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error =>{
      Swal.fire('Ocorreu um erro durante o depósito')
      console.error(error);
    });
  }

  transferencia() {
    const transferencia: Transferencia = this.formValue.value;
    console.log("Transferência", transferencia);
    this.contasService.transferencia(transferencia).subscribe(result => {
      Swal.fire('Transferência efetuada com sucesso!');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Ocorreu um erro durante a transferência','error')
    console.error(error);
    });
  }


  consultarExtrato() {
    this.contasService.consultarExtrato(this.agencia, this.numeroConta).subscribe((result: Extrato[]) => {
      this.extratos = result;
    }, error =>{
      Swal.fire('Verifique os dados digitados.')
      console.error(error);
    });
  }


}

