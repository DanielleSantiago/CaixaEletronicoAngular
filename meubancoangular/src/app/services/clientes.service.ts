import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../pages/Interfaces/cliente'


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  endpoint ='clientes/';
  api = environment.api;

  constructor(private http: HttpClient) {

   }

  listarTodosClientes() {
    return this.http.get<Cliente[]>(`${this.api}/${this.endpoint}`);
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(`${this.api}/${this.endpoint}`, cliente);
  }

  getCliente() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.api}/${this.endpoint}`);
  }
  remover(id: number) {
    return this.http.delete(`${this.api}/${this.endpoint}${id}`);
  }
  buscarPorId(id: number) {
    return this.http.get<Cliente>(`${this.api}/${this.endpoint}${id}`);
  }

}
