import { Component, OnInit } from "@angular/core";
import { ServicoServico } from "../servicos/servico/servico.servico";
import { Servico } from "../modelo/servico";

@Component({
  selector: 'servico',
  templateUrl: 'servico.component.html',
  styleUrls: ['servico.component.css'],
})
export class ServicoComponent implements OnInit {
  public servico: Servico;
  public ativar_spinner: boolean;
  public mensagem: string;
  public servicoCadastrado: boolean;

  constructor(private servicoServico: ServicoServico) {

  }
    
  ngOnInit(): void {
    this.servico = new Servico();
  }

  public cadastrarServico() {
    this.servicoServico.cadastrarServico(this.servico)
      .subscribe(
        servicoJson => {
          this.servicoCadastrado = true;
          this.mensagem = "";
          this.ativar_spinner = false;
        },
        err => {
          this.ativar_spinner = false;
          this.mensagem = err.error;
        });
  }

}
