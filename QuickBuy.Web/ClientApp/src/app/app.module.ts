import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './usuario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rota';
import { UsuarioServico } from './servicos/usuario/usuario.servico';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { ProdutoServico } from './servicos/produto/produto.servico';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { LojaEfetivarComponent } from './loja/efetivar/loja.efetivar.component';
import { LojaProdutoComponent } from './loja/produto/loja.produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProdutoComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PesquisaComponent,
    LojaPesquisaComponent,
    LojaEfetivarComponent,
    LojaProdutoComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'entrar', component: LoginComponent },
      { path: 'novo-usuario', component: CadastroUsuarioComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'pesquisa-produto', component: PesquisaComponent },
      { path: 'loja-produto', component: LojaProdutoComponent },
      { path: 'loja-efetivar', component: LojaEfetivarComponent }
    ])
  ],
  providers: [UsuarioServico, ProdutoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }

// { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
