export type TipoMissao = {
  id: number;
  titulo: string;
  descricao: string;
  xp: number;
  icone: "reciclagem" | "agua" | "transporte" | "energia";
};