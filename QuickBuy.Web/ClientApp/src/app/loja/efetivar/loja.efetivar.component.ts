import { Component, OnInit } from '@angular/core';
import { LojaCarrinhoCompras } from '../carrinho/loja.carrinho.compras';
import { Produto } from 'src/app/modelo/produto';

@Component({
    selector: 'app-loja-efetivar',
    templateUrl: '/loja.efetivar.component.html',
    styleUrls: ['./loja.efetivar.component.css']
})
export class LojaEfetivarComponent implements OnInit {
    public carrinhoCompras: LojaCarrinhoCompras;
    public produtos: Produto[];

    ngOnInit() {
        this.carrinhoCompras = new LojaCarrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
    }
}
