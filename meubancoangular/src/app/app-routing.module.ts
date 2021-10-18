import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';

import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';
import { CaixaEletronicoComponent } from './caixa-eletronico/caixa-eletronico/caixa-eletronico.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'clientes', pathMatch: 'full'
  },
  {
    path: 'clientes', component: ListagemClientesComponent
  },
  {
    path: 'clientes/cadastrar', component: CadastroEdicaoClientesComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastroEdicaoClientesComponent
  },
  {
    path: 'contas', component: ListagemContasComponent
  },
  {
    path: 'caixa-eletronico', component: CaixaEletronicoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
