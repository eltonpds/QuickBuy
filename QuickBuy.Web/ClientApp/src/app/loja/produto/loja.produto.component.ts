import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelo/produto';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { LojaCarrinhoCompras } from '../carrinho/loja.carrinho.compras';

@Component({
    selector: 'app-loja-produto',
    templateUrl: './loja.produto.component.html',
    styleUrls: ['./loja.produto.component.css']
})
export class LojaProdutoComponent implements OnInit {
    public produto: Produto;
    public carrinhoCompras: LojaCarrinhoCompras;

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrinhoCompras();
        this.produto = new Produto();
        const produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
    }

    constructor(private produtoServico: ProdutoServico, private router: Router) {  }

    public comprar() {
        this.carrinhoCompras.adicionar(this.produto);
        this.router.navigate(['/loja-efetivar']);
    }
}
