import { Injectable } from '@angular/core';
import { Livros } from '../models/Livros';
import {HttpClient} from '@angular/common/http'
import { AppConfiguration } from "read-appsettings-json";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private configUrl  = "https://localhost:7046/Livro?skip=0&take=50";//AppConfiguration.Setting().defaultUrl;

  constructor(private httpRequest: HttpClient) { }

  getLIvros() {
    return this.httpRequest.get<Livros[]>(this.configUrl);
  }

}
