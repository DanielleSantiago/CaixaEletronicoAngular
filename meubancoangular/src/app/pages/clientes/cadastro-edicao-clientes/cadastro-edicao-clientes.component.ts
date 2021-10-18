import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from '../../Interfaces/cliente';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-edicao-clientes',
  templateUrl: './cadastro-edicao-clientes.component.html',
  styleUrls: ['./cadastro-edicao-clientes.component.css']
})
export class CadastroEdicaoClientesComponent implements OnInit {

  formValue: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    observacoes: new FormControl(''),
    ativo: new FormControl(true),
  });

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.clientesService.buscarPorId(Number(id)).subscribe((resultCliente: Cliente) => {
        this.preencheFormValue(resultCliente);
      }, error => {
        console.error(error);
      });
    }
  }


  preencheFormValue(cliente: Cliente) {
    this.formValue = new FormGroup({
      id: new FormControl(cliente.id),
      nome: new FormControl(cliente.nome, Validators.required),
      cpf: new FormControl(cliente.cpf, Validators.required),
      email: new FormControl(cliente.email, [Validators.required, Validators.email]),
      observacoes: new FormControl(cliente.observacoes),
      ativo: new FormControl(cliente.ativo),
    })
  }

  onSubmit() {
    const cliente: Cliente = this.formValue.value;
    this.clientesService
      .salvar(cliente)
      .subscribe(result => {
        Swal.fire('Salvo com sucesso!')
        this.router.navigate(['/clientes']);
      }, error => {
        console.error(error);
    })
  }
}
