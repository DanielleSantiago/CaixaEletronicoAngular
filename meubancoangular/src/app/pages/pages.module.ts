import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';
import { CadastroEdicaoClientesComponent } from './clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';
import { CaixaEletronicoComponent } from '../caixa-eletronico/caixa-eletronico/caixa-eletronico.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ListagemClientesComponent,
    CadastroEdicaoClientesComponent,
    ListagemContasComponent,
    CaixaEletronicoComponent

  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
