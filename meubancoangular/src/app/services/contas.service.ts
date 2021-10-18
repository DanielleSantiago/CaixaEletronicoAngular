import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContaBancaria } from '../pages/Interfaces/contaBancaria';
import { Extrato } from '../pages/Interfaces/extrato';
import { SaqueDeposito } from '../pages/Interfaces/saque-deposito';
import { Transferencia } from '../pages/Interfaces/transferencia';


@Injectable({
  providedIn: 'root'
})
export class ContasService {

  endpoint ='contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas(): Observable<ContaBancaria[]> {
    return this.http.get<ContaBancaria[]>(`${this.api}/${this.endpoint}`);
  }

  getContaBancaria() : Observable<ContaBancaria[]> {
    return this.http.get<ContaBancaria[]>(`${this.api}/${this.endpoint}`);
  }

  saque(saque: SaqueDeposito) {
    return this.http.post(`${this.api}/${this.endpoint}saque`, saque);
  }

  deposito(deposito: SaqueDeposito) {
    return this.http.post(`${this.api}/${this.endpoint}deposito`, deposito);
  }

  transferencia(transferencia: Transferencia) {
    return this.http.post(`${this.api}/${this.endpoint}transferencia`, transferencia);
  }

  consultarExtrato(agencia:string, conta:string) {
    return this.http.get<Extrato[]>(`${this.api}/${this.endpoint}consultar-extrato/${agencia}/${conta}`);
  }

}

