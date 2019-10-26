import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../../modelo/produto';

@Injectable({
  providedIn: "root"
})
export class ProdutoServico implements OnInit {
    
  private _baseUrl: string;
  public produto: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.produto;
  }

  get headers():HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto", JSON.stringify(produto), {headers: this.headers})
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto", JSON.stringify(produto), { headers : this.headers})
  }

  public deletar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
  }
   
  public obterTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this._baseUrl + "api/produto");
  }

  public obterProduto(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this._baseUrl + "api/produto/obter");
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<boolean>(this._baseUrl + "api/produto/enviarArquivo", formData);
  }
}