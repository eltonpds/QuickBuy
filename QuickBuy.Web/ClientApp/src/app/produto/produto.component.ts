import { Component, OnInit } from "@angular/core";

import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Router } from "@angular/router";

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

  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    }
    else {
      this.produto = new Produto();
    }
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
          this.produto = produtoJson;
          this.produtoCadastrado = true;
          this.mensagem = "";
          this.ativar_spinner = false;
          this.router.navigate(['/pesquisa']);
        },
        err => {
          this.ativar_spinner = false;
          this.mensagem = err.error;
        });
  }
}
