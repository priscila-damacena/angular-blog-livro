export class postLivros{
  titulo!:string;
  genero!:string ;
  qtdePagina!:number ;
  autor!:string ;
  imagem!:string ;

  constructor(titulo: any , genero:any, qtdePaginas: any, autor: any)
  {
    this.titulo = titulo;
    this.genero = genero;
    this.qtdePagina = qtdePaginas;
    this.autor = autor;
    this.imagem = '';

  }
}
