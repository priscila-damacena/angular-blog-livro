import { Usuarios } from "./Usuarios";
import { Comentario } from "./Comentario";
import { Livros } from "./Livros";

export interface Publicacoes{
  usuario:Usuarios ;
  livro: Livros ;
  comentario: Comentario ;
  resenha:string ;
  reacao:number ;
}
