export type TipoMissao = {
  foto: string;
  id: number;
  titulo: string;
  descricao: string;
  xp: number;
  icone: "reciclagem" | "agua" | "transporte" | "energia";
};