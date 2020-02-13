import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Produto } from '../modelo/produto';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit() {
  }

  constructor(private router: Router, private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
    .subscribe(
      result => {
        this.produtos = result;
        console.log(result);
      },
      er => {
        console.log(er.error);
      }
    );
   }

   adicionarProduto() {
    this.router.navigate(['/produto']);
   }

   public deletarProduto(produto: Produto) {
    let retorno = confirm('Deseja realmente deletar o produto selecionado?');
    if (retorno == true) {
      this.produtoServico.deletar(produto)
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        }, e => {
          console.log(e.error);
        });
      }
   }

   public editarProduto(produto: Produto) {
     sessionStorage.setItem('produtoSession', JSON.stringify(produto));
     this.router.navigate(['/produto']);
   }

}
