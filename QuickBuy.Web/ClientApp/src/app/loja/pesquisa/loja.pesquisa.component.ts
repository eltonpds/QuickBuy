import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Produto } from '../../modelo/produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.pesquisa.component.html',
  styleUrls: ['./loja.pesquisa.component.css']
})
export class LojaPesquisaComponent implements OnInit {
  public produtos: Produto[];

  ngOnInit(): void {
  }

  constructor(private router: Router, private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        e => {
          console.log(e.error);
        });
  }

  abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }

}
