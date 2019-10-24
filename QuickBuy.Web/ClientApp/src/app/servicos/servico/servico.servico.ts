import { OnInit, Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Servico } from "../../modelo/servico";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServicoServico implements OnInit {
    

  private _baseUrl: string;
  public servico: Servico[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.servico;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrarServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this._baseUrl + "api/servico", JSON.stringify(servico), { headers: this.headers })
  }
}
