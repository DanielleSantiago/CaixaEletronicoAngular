export interface ContaBancaria {
  agencia: string,
    cliente: {
      ativo: boolean,
      cpf: string,
      email: string,
      id: number,
      nome: string,
      observacoes: string
    },
    id: number,
    numero: string,
    saldo: number,
}


