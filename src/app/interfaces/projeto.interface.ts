export interface Projeto {

  /**
   * Título do projeto
   */
  titulo: string;

  /**
   * Breve descrição do projeto
   */
  descricao: string;

  /**
   * Data de criação do projeto
   */
  criado: string;

  /**
   * Caminho de Arquivos do projeto
   */
  imagens: string[];

  /**
   * Thumbnail do projeto
   */
  thumbnail: string,

  /**
   * Categoria do projeto
   */
  categoria: string;

}
