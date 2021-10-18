import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../Interfaces/cliente';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarTodos();

  }

  listarTodos() {
    this.clientesService.listarTodosClientes().subscribe((result: Cliente[]) => {
      this.clientes = result;
    });
  }

  apagar(id: number) {
    Swal
    .fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode apagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientesService.remover(id).subscribe(result => {
          this.listarTodos();
          Swal.fire(
            'Apagado!',
            'Cliente apagado com sucesso.',
          )
        }, error => {
          console.error(error);
        });
      }
    })
  }

}
