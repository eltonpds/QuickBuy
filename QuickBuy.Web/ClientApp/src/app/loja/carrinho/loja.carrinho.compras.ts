import { Produto } from "src/app/modelo/produto";

export class LojaCarrinhoCompras{
    public produtos: Produto[] = [];
    public adicionar(produto: Produto){
        let produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        } else {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }

    localStorage.setItem('produtoLocalStorage', JSON.stringify(this.produtos));
    }

    public obterProdutos(): Produto[] {
        let produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
        if (produtoLocalStorage)
            return JSON.parse(produtoLocalStorage);
    }

    public removerProduto(produto: Produto) {

    }
}
