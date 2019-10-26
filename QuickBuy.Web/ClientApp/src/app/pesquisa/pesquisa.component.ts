import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Produto } from '../modelo/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit() {
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
      },
      er =>{
        console.log(er.error);
      }
    )
   }

   adicionarProduto(){
      this.router.navigate(['/produto']);
   }

}
