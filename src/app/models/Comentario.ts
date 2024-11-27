import { Usuarios } from "./Usuarios";

export interface Comentario{
  id: number;
  usuario:Usuarios;
  descricao:string;
}
