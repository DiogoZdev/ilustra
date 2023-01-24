export interface Project {
  titulo: string;
  descricao: string;
  criado: string;
  imagens: string[];
  thumbnail: string,
  categoria: string[];
}

export interface ProjectList {
  projects: Project[];
}
