import { Injectable } from '@angular/core';
import { Livros } from '../models/Livros';
import { Publicacoes } from '../models/Publicacoes';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { AppConfiguration } from "read-appsettings-json";
import { postLivros } from '../models/postLivros';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private configUrl  = "https://localhost:7046/";//AppConfiguration.Setting().defaultUrl;

  constructor(private httpRequest: HttpClient) { }

  getLIvros() {
    return this.httpRequest.get<Livros[]>(this.configUrl + "Livro?skip=0&take=50");
  }

  postLivros(body: postLivros) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpRequest.post<any>(this.configUrl + "Livro", JSON.stringify({Titulo: body.titulo, Genero: body.genero, QtdePagina: body.qtdePagina, Autor: body.autor, Imagem: ""}), {headers: headers} );
  }

  getPublicacoes() {
    return this.httpRequest.get<Publicacoes[]>(this.configUrl + 'Publicacao');
  }


  postPublicacao( idLivro: number, resenha: string,idUsuario: string) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httpRequest.post<any>(this.configUrl + "Publicacao", JSON.stringify({idUsuario: idUsuario, idLivro: idLivro, resenha: resenha}), {headers: headers} );
  }


  getLogin(cpf :string) {
    return this.httpRequest.get<any>(this.configUrl + 'Login?Cpf=' + cpf);
  }

}
