import { Component, OnInit } from "@angular/core";

import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: 'produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit{
  public produto: Produto;
  public produtos: Produto[];
  public ativar_spinner: boolean;
  public mensagem: string;
  public produtoCadastrado: boolean;
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
  }

  public obterTodosProdutos(){
    this.produtoServico.obterTodosProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
      },
      er => {
        console.log(er.error);
      });
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        retorno => {
          console.log(retorno)
        },
        e => {
          console.log(e)
        });
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          this.produtoCadastrado = true;
          this.mensagem = "";
          this.ativar_spinner = false;
        },
        err => {
          this.ativar_spinner = false;
          this.mensagem = err.error;
        });
  }
}
